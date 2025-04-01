import undetected_chromedriver as uc
from time import sleep
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC


driver = uc.Chrome()
# driver = uc.Chrome(headless=True,use_subprocess=False)


def get_body_text(url):
   """
   Retrieves the body content of a webpage.
   Args:
      url (str): The URL of the webpage to retrieve.
   Returns:
      str: The text content of the body element.
   """
   try:
      driver.get(url)
      
      body_element = WebDriverWait(driver, 20).until(
         EC.presence_of_element_located((By.TAG_NAME, "body"))
      )
      return body_element.text
   except Exception as e:
      print(f"Error: {e}")
      return None

# wait for the response to finish
def wait_for_gpt_response_and_write_it_as_code():
    try:
        # Wait for the speech button to appear
        speech_button = WebDriverWait(driver, 30).until(
            EC.presence_of_element_located((By.CSS_SELECTOR, '[data-testid="composer-speech-button"]'))
        )
    except Exception as e:
        print(f"Error waiting for speech button: {e}")
        return

    try:
        # Wait for code elements to appear and print their text
        code_elements = WebDriverWait(driver, 30).until(
            EC.presence_of_all_elements_located((By.CSS_SELECTOR, "code"))
        )
        
        for code_element in code_elements:
            with open("/home/mohamed/developpement/selenuim/generated/output.sql", "a") as file:
                file.write(code_element.text + "\n")
    except Exception as e:
        print(f"Error retrieving code elements: {e}")
    
 

prompt = "Categories this document to readable and logical categories as postgres script (it's postgres so be wary its case sensistive, like Manga table you need to add \"Manga\" for it to work) based on the text present and my schema, focus on the main manga/manhwa/manhua of the page, ignore the related entities. Here is my prisma schema : " \
         "Respond only with the requested postgres script, without any explanations or notes."



url = "https://asurascans.com.lv/manga/solo-leveling/"

# body_content = get_body_text(url)
body_text = get_body_text(url)
driver.get(f"https://chatgpt.com/?q={prompt + " " + body_text}")
wait_for_gpt_response_and_write_it_as_code()


