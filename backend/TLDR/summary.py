from lib2to3.pgen2 import driver
from selenium import webdriver
from .models import PressRelease
from .ml_model import summary_model


items = []
information = []
PATH="C:\Program Files\chromedriver.exe"
driver = webdriver.Chrome(PATH)

def scrap():
    driver.get('https://www.pib.gov.in/allRel.aspx')
    items = driver.find_elements_by_class_name("num")
    links= []
    for ul in items:
        ministry_wise_list=(ul.find_elements_by_tag_name("li"))
        for link in ministry_wise_list:
            a=link.find_element_by_tag_name("a")
            links.append(a.get_attribute("href"))

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
        
        print("SAVING DATA IN DB")
        p = PressRelease(
            PressReleaseTitle = i["ministry"], 
            PressReleaseDate = i["date"], 
            PressReleaseCategory = i["ministry"],
            PressReleaseLink = i["images"],
            PressReleaseSummary = summary_model(i["text"]),
        )
        print(p)
        if p:
            p.save()
            print("\nSaved Info\n")
        else:
            print("\nError!\n")

# def summary_model(input_text):
    
#     clean_text = text_cleaning(input_text)
#     print("\nSTARTING MODEL")
#     data_tok = bart_tok(clean_text,return_tensors="pt")
#     summary = bart_model.generate(data_tok["input_ids"])
#     print("\n",bart_tok.batch_decode(summary))
#     return bart_tok.batch_decode(summary)

# def text_cleaning(input_text):
    
#     print("\nCLEANING TEXT")
#     stop_words = set(stopwords.words('english'))
#     eng = set(words.words())
#     input_words = word_tokenize(input_text)
#     clean_text = ""
#     for word in input_words:
#         word=word.lower()
#         if word.isalpha() and word not in stop_words and word in eng:
#             clean_text+=" "+word
#     print("\n",clean_text)
#     return clean_text

