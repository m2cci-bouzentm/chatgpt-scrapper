import undetected_chromedriver as uc
from time import sleep
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import asyncio
from prisma import Prisma



# scrapping functions 
def get_manga_data(driver, manga_url):
    """
    Scrapes manga details such as title, description, author, status, type, release year, 
    last updated date, rating count, and categories from the given manga URL using only CSS selectors.
    
    Args:
        driver (WebDriver): Selenium WebDriver instance.
        manga_url (str): URL of the manga page to scrape.

    Returns:
        dict: A dictionary containing the manga details.
    """
    try:
        driver.get(manga_url)
        
        # Extract title
        title = driver.find_element(By.CSS_SELECTOR, 'h1.entry-title[itemprop="name"]').text
        print(title)
        
        number_of_chapters =  driver.find_element(By.CSS_SELECTOR, 'div.lastend .inepcx:last-child span:last-child').text.split(" ")[1]
        
        # Extract description
        description = driver.find_element(By.CSS_SELECTOR, 'div.entry-content.entry-content-single[itemprop="description"] p').text
        
        # Extract author
        author = driver.find_element(By.CSS_SELECTOR, 'div.fmed:nth-child(2) > span').text
        
        # Extract status
        status = driver.find_element(By.CSS_SELECTOR, 'div.imptdt i').text.upper()
        
        # Extract type
        manga_type = driver.find_element(By.CSS_SELECTOR, 'div.imptdt a').text.upper()
        
        # Extract release year
        release_year = driver.find_element(By.CSS_SELECTOR, 'div.fmed > span').text
        
        # Extract last updated date
        updated_on = driver.find_element(By.CSS_SELECTOR, 'div.fmed time[itemprop="dateModified"]').get_attribute('datetime')
        
        
        # Extract categories
        categories_elements = driver.find_elements(By.CSS_SELECTOR, 'div.wd-full span.mgen a')
        categories = [categories.text.upper() for categories in categories_elements]
        
        # Extract image URL
        image_url = driver.find_element(By.CSS_SELECTOR, 'img[itemprop="image"]').get_attribute('src')
        
        return {
            "name": title,
            "description": description,
            "numberofChapters": float(number_of_chapters),
            "authors": author,
            "status": status,
            "type": manga_type,
            "releaseYear": int(release_year) if release_year.isdigit() else None,
            "updatedAt": updated_on,
            "categories": categories,
            "thumbnailUrl": image_url
        }
    except Exception as e:
        print(f"Error retrieving manga details: {e}")
        return {}

def get_chapter_data(driver, manga_url):
    """
    Retrieves all hyperlinks inside div elements with the class 'chbox'.
    Args:
        url (str): The URL of the webpage to retrieve.
    Returns:
        list: A list of hyperlinks (URLs) found inside the div elements with class 'chbox'.
    """
    try:
        driver.get(manga_url)
        chbox_elements = WebDriverWait(driver, 20).until(
            EC.presence_of_all_elements_located((By.CSS_SELECTOR, "div.chbox a"))
        )
        title_elements = WebDriverWait(driver, 20).until(
            EC.presence_of_all_elements_located((By.CSS_SELECTOR, 'span[class="chapternum"]'))
        )
        return {
                  "chapters": [chbox.get_attribute("href") for chbox in chbox_elements], 
                  "chapters_number": [float(title.text.split(" ")[1]) for title in title_elements ] 
                }
    except Exception as e:
        print(f"Error: {e}")
        return []

def get_images_list(driver, chapter_url):
    try:
        driver.get(chapter_url)
        image_elements = WebDriverWait(driver, 20).until(
            EC.presence_of_all_elements_located((By.CSS_SELECTOR, "div#readerarea img"))
        )
        images_list = []

        for img in image_elements:
            images_list.append(img.get_attribute("src"))
        
        return images_list
    except Exception as e:
        print(f"Error retrieving images: {e}")
        
        
# db functions
async def add_manga_and_categories(db, manga, categories):
   for c in categories:
    category = await db.category.find_unique(where={"name": c})
    
    if not category:
        category = await db.category.create(
            data={
                "name": c
            }
        )
    
    await db.manga.update(
        where={
            "id": manga.id,
        },
        data={
            "categories": {
                "create": {
                    "categoryName": category.name
                }
            },
        },
    )

async def main():
   db = Prisma()
   driver = uc.Chrome(headless=True)
   await db.connect()

   manga_url_list = [
   #  "https://asurascans.com.lv/manga/omniscient-readers-viewpoint/",
   #  "https://asurascans.com.lv/manga/playing-the-perfect-fox-eyed-villain/",
   #  "https://asurascans.com.lv/manga/absolute-regression/",
   #  "https://asurascans.com.lv/manga/the-max-level-players-100th-regression/",
   #  "https://asurascans.com.lv/manga/infinite-mage/",
   #  "https://asurascans.com.lv/manga/myst-might-mayhem/",
   #  "https://asurascans.com.lv/manga/i-am-the-fated-villain/",
   #  "https://asurascans.com.lv/manga/my-exclusive-tower-guide/",
   #  "https://asurascans.com.lv/manga/light-of-arad-forerunner/",
   #  "https://asurascans.com.lv/manga/weapon-maker/",
   #  "https://asurascans.com.lv/manga/genius-archers-streaming/",
   #  "https://asurascans.com.lv/manga/the-ultimate-shut-in/",
   #  "https://asurascans.com.lv/manga/my-school-life-pretending-to-be-a-worthless-person/",
   #  "https://asurascans.com.lv/manga/the-illegitimate-who-devours-weapons/",
   #  "https://asurascans.com.lv/manga/love-letter-from-the-future/",
   #  "https://asurascans.com.lv/manga/the-tutorial-is-too-hard/",
   #  "https://asurascans.com.lv/manga/regressor-of-the-fallen-family/", # skipped
   #  "https://asurascans.com.lv/manga/villain-to-kill/",
    # "https://asurascans.com.lv/manga/your-talent-is-mine/",
    # "https://asurascans.com.lv/manga/youngest-scion-of-the-mages/",
    # "https://asurascans.com.lv/manga/the-novels-extra-remake/",
    # "https://asurascans.com.lv/manga/the-indomitable-martial-king/",
    # "https://asurascans.com.lv/manga/martial-god-regressed-to-level-2/",
    # "https://asurascans.com.lv/manga/superhuman-battlefield/",
    # "https://asurascans.com.lv/manga/absolute-sword-sense/",
    # "https://asurascans.com.lv/manga/logging-10000-years-into-the-future/",
    # "https://asurascans.com.lv/manga/surviving-as-a-genius-on-borrowed-time/",
    # "https://asurascans.com.lv/manga/revenge-of-the-iron-blooded-sword-hound/",
    # "https://asurascans.com.lv/manga/murim-login/",
    # "https://asurascans.com.lv/manga/regression-of-the-yong-clan-heir/",
    # "https://asurascans.com.lv/manga/the-regressed-mercenarys-machinations/",
    # "https://asurascans.com.lv/manga/the-last-adventurer/",
    # "https://asurascans.com.lv/manga/player-who-cant-level-up/",
    # "https://asurascans.com.lv/manga/the-hero-returns/",
    # "https://asurascans.com.lv/manga/academys-genius-swordmaster/",
    # "https://asurascans.com.lv/manga/swordmasters-youngest-son/",
    # "https://asurascans.com.lv/manga/chronicles-of-the-demon-faction/",
    # "https://asurascans.com.lv/manga/the-player-hides-his-past/",
    # "https://asurascans.com.lv/manga/regressing-with-the-kings-power/",
    # "https://asurascans.com.lv/manga/surviving-the-game-as-a-barbarian/",
    # "https://asurascans.com.lv/manga/duke-pendragon/",
    # "https://asurascans.com.lv/manga/academys-undercover-professor/",
    # "https://asurascans.com.lv/manga/the-nebulas-civilization/",
    # "https://asurascans.com.lv/manga/trait-hoarder/",
    # "https://asurascans.com.lv/manga/somebody-stop-the-pope/",
    # "https://asurascans.com.lv/manga/the-knight-king-who-returned-with-a-god/"
]
   
   for manga_url in manga_url_list:
      manga_data = get_manga_data(driver, manga_url) 
      print(manga_data)
      
      manga = await db.manga.create(
         data= {
               "name": manga_data["name"],
               "description": manga_data["description"],
               "authors": manga_data["authors"],
               "status": manga_data["status"],
               "type": manga_data["type"],
               "releaseYear": manga_data["releaseYear"],
               "updatedAt": manga_data["updatedAt"],
               "thumbnailUrl": manga_data["thumbnailUrl"]
         },
      )
      
      print(f"Inserted manga with ID: {manga.id} and Name: {manga.name}")

      await add_manga_and_categories(db, manga, manga_data["categories"])
      
      print(f"Categories added to manga {manga.name}: {manga_data['categories']}")
      
  
      
      chapters_data = get_chapter_data(driver, manga_url)
      # print(chapters_data)
      
      for i, ch in enumerate(reversed(chapters_data["chapters"])):
         images_list = get_images_list(driver, ch)
         # print(images_list)
         chapter = await db.chapter.create({
                  "chapterNumber": list(reversed(chapters_data["chapters_number"]))[i],
                  "numberOfImages": len(images_list),
                  "publishedDate": None,
                  "mangaId": manga.id 
         }) 
         print(f"Inserted chapter number: {chapter.chapterNumber}")
         
         for order, image in enumerate(images_list, start=1):
            await db.image.create({
               "url": image,
               "chapterId": chapter.id,
               "order": order
            })
            print(f"Inserted image {order} for chapter {chapter.chapterNumber}")
         

   await db.disconnect()
   return 0


if __name__ == '__main__':
   asyncio.run(main())
