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



padding = "Generate only the exact response I am asking for. Do not add any extra information, explanations, or details beyond what is requested. If I ask for specific elements, only provide those and nothing else. If something is unclear, ask for clarification, but do not make assumptions or add extra CONTENT. AND the last word in the response and must be COMPLETED !!! UDNERSTAND ? NOW to my request"


schema = """
model Manga {
  id   Int    @id @default(autoincrement())
  name String @unique

  updatedAt        DateTime? @default("1970-01-01T00:00:00Z")
  description      String
  numberOfChapters Int?      @default(0)
  thumbnailUrl     String

  authors     String?
  releaseYear Int?
  type        ScanType
  status      Status   @default(ONGOING)

  viewCount     Int   @default(0)
  ratingSum     Float @default(0)
  ratingCount   Int   @default(0)
  favoriteCount Int   @default(0)

  categories MangaCategory[]
  chapters   Chapter[]
  comments   Comment[]

  favoredBy Favorite[]
  rating    Rating[]
}

model Category {
  name  String          @id
  manga MangaCategory[]
}
"""

prompt = "Categories this document to readable and logical categories as json based on the text present in the, focus on the main manga/manhwa/manhua of the page, ignore the related entities. Here is my schema : " + schema


url = "https://asurascans.com.lv/manga/solo-leveling/"

body_content = get_body_text(url)
 
query = padding + '%0A' + 'My request is : ' + prompt + " " + body_content
 
driver.get(f"https://chat.openai.com/?q={query}")

# wait for the response to finish
try:
    speech_button = WebDriverWait(driver, 200).until(
        EC.presence_of_element_located((By.CSS_SELECTOR, '[data-testid="composer-speech-button"]'))
    )
    print("Speech button is visible.")
except Exception as e:
    print(f"Error waiting for speech button: {e}")
    
    
try:
    code_elements = WebDriverWait(driver, 20).until(
        EC.presence_of_all_elements_located((By.CSS_SELECTOR, "code"))
    )
    for code_element in code_elements:
        print(code_element.text) 
except Exception as e:
    print(f"Error: {e}")
    
    
   




sleep(200)