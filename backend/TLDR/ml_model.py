# import torch
import pickle
# import nltk
# from transformers import BartTokenizer,BartForConditionalGeneration

# nltk.download('stopwords')
# nltk.download('punkt')
# nltk.download("words")

from nltk.corpus import stopwords,words
from nltk.tokenize import word_tokenize

# bart_model = BartForConditionalGeneration.from_pretrained("facebook/bart-large-cnn")
# bart_tok = BartTokenizer.from_pretrained("facebook/bart-large-cnn")

bart_model = pickle.load(open('D:/CODE/SIH/TLDR_SIH/backend/model/model.pkl', 'rb'))
bart_tok = pickle.load(open('D:/CODE/SIH/TLDR_SIH/backend/model/tokenizer.pkl', 'rb'))

def summary_model(input_text):
    print("STARTING MODEL")
    clean_text = text_cleaning(input_text)
    data_tok=bart_tok(clean_text,return_tensors="pt")
    summary=bart_model.generate(data_tok["input_ids"])
    print(bart_tok.batch_decode(summary))
    return bart_tok.batch_decode(summary)
    
def text_cleaning(input_text):
    
    print("CLEANING TEXT")
    stop_words = set(stopwords.words('english'))
    eng = set(words.words())
    input_words = word_tokenize(input_text)
    clean_text = ""
    for word in input_words:
        word=word.lower()
        if word.isalpha() and word not in stop_words and word in eng:
            clean_text+=" "+word
    print(clean_text)
    return clean_text