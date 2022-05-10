from lib2to3.pgen2 import driver
from selenium import webdriver
from .models import PressRelease
from .ml_model import summary_model, get_title


items = []
information = []
PATH="C:\Program Files\chromedriver.exe"
driver = webdriver.Chrome(PATH)
db_links =  PressRelease.objects.values_list('PressReleaseLink', flat=True)


def scrap():
    driver.get('https://www.pib.gov.in/allRel.aspx')
    # driver.find_element_by_xpath("//select[@id='ContentPlaceHolder1_ddlday']/option[text()='18']").click()
    items = driver.find_elements_by_class_name("num")
    links= []
    for ul in items:
        ministry_wise_list=(ul.find_elements_by_tag_name("li"))
        for link in ministry_wise_list:
            a = link.find_element_by_tag_name("a")
            l = a.get_attribute("href")
            if l in db_links or l in links:
                continue
            else:
                links.append(l)
    
    # information list contains dictionaries with  text,image(this is a list of images),date,ministry keywords
    
    for clickable in links:
        driver.get(clickable)
        clickable_data = {}
        # ministry data
        ministry_name = driver.find_element_by_class_name('MinistryNameSubhead').get_attribute('innerText')
        clickable_data['ministry']=ministry_name
        # date
        date_of_release = driver.find_element_by_class_name('ReleaseDateSubHeaddateTime').get_attribute('innerText')
        clickable_data['date'] = date_of_release[11:22]
        #images
        imgs = driver.find_elements_by_tag_name('img')
        for i in range(0,len(imgs)):
            imgs[i]=imgs[i].get_attribute('src')

        clickable_data['images'] = imgs
        # text
        texts = driver.find_elements_by_tag_name('p')
        text_string=""
        for i in range(0, len(texts)):
            text_string = text_string + texts[i].get_attribute('innerText')
        clickable_data['text'] = text_string
        if clickable_data in information:
            continue
        else:
            information.append(clickable_data)
    
    if information is not None:
        print("\nScrapped All information!!", len(information))
    
    for i in information:
        # print("\n")
        # print(i["ministry"])
        # print(i["date"])
        # print(i["images"])
        # print(i["text"])
        # print("\n")
        # print("************************************************************************************************")
        
        print("GETTING DATA FOR DB")
        title = get_title(i["text"])
        image = get_image(title)
        summary = summary_model(i["text"])

        print("SAVING DATA IN DB")
        p = PressRelease(
            PressReleaseTitle = title, 
            PressReleaseDate = i["date"], 
            PressReleaseCategory = i["ministry"],
            PressReleaseImage = image,
            PressReleaseLink = links[information.index(i)],
            PressReleaseSummary = summary,
        )
        print(p)
        if p:
            p.save()
            print("\nSaved Info\n")
        else:
            print("\nError!\n")

def get_image(title):
    driver.get("https://google.com/")
    driver.find_element_by_xpath("//*[@id='gb']/div/div[1]/div/div[2]/a").click()
    driver.find_element_by_xpath("//*[@id='sbtc']/div/div[2]/input").send_keys(title)
    driver.find_element_by_xpath("//button[@class='Tg7LZd']").click()
    img=driver.find_element_by_xpath("//img[@class='rg_i Q4LuWd']").get_attribute("src")
    # print(img)
    return img