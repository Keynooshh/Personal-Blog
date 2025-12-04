# **Personal Blog (Built with Zola)**

A fast and minimal personal blog built with **Zola**, using custom **HTML** and **CSS**, and only **few  JavaScript lines** for small interactive enhancements. The goal of this project is simplicity, speed, full control over the layout and design and easy content management.

----------

##  **Features**

-  **Very fast** — powered by Zola
    
-  **Hand-crafted HTML + CSS** (no frameworks)
    
-   **JavaScript snippet** (just enough for small UI behavior)
    
-    Fully **responsive design**
    
-   Posts written in Markdown
    
-    Extremely clean codebase with no unnecessary dependencies
    

----------

##  **Project Structure**

```txt
.
├── content/        # Blog posts in Markdown
├── templates/      # HTML templates
├── static/
│   ├── Fonts/ 			# Fonts
│   ├── Images/ 		# Images
│   │   ├── Icons/		# Icons
│   ├── css/        	# Stylesheet
│   └── js/         	# JS file  
├── config.toml     	# Zola configuration
└── README.md

```

----------

## **Setup & Development**

### 1. Install Zola

[https://www.getzola.org/documentation/getting-started/installation/](https://www.getzola.org/documentation/getting-started/installation/)

### 2. Clone this project

```sh
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

### 3. Start the development server

```sh
zola serve
```

Then open:  
**[http://localhost:1111](http://localhost:1111)**

### 4. Build for production

```sh

zola build
```

The generated site will appear in `/public`.

----------

##  **Customization**

-   Edit **`config.toml`** to update titles, theme, metadata, etc.
    
-   Modify **HTML templates** in `/templates`
    
-   Update **styles** in `/static/css`
    
-   Add/edit posts in `/content`
    
-   The tiny JS snippet lives in `/static/js`
    

----------
##  **Contributions**

Suggestions and improvements are welcome — feel free to open an issue or Pull request.


