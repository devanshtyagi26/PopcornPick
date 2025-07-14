# PopcornPick – Your AI-Powered Movie Matchmaker

![PopcornPick Demo](./Demo/Demo.gif)

PopcornPick is a smart movie recommendation web app that helps you find the perfect film based on your taste. Select a movie you like, and PopcornPick will suggest similar movies using machine learning and content-based filtering — no endless scrolling required.

---

## 🔗 Live Demo

👉 **Website:** [https://popcornpickapp.netlify.app/](https://popcornpickapp.netlify.app/)  
👉 **LinkedIn Post:** [Check out the build!](https://www.linkedin.com/posts/tyagi-devansh_onedaybuild-machinelearning-fastapi-activity-7349861243572133889-l4qn)

---

## 🚀 Features

- 🎥 Select a movie from a searchable list
- 🧠 Get top 5 similar movie recommendations
- 🧮 ML-powered content-based filtering (trained in Jupyter Notebook)
- 📦 Fully responsive frontend using Next.js & Tailwind CSS
- ⚡ FastAPI backend serving recommendation API
- 🖼️ Real-time movie posters using TMDb API (Currently Disabled)
- ☁️ Hosted on Netlify (frontend) & Render (backend)

---

## 🧠 Tech Stack

| Layer            | Technology                             |
| ---------------- | -------------------------------------- |
| Frontend         | Next.js, Tailwind CSS, ShadCN UI       |
| Backend          | FastAPI, Python, Uvicorn               |
| Machine Learning | scikit-learn, pandas, Jupyter Notebook |
| APIs             | TMDb API, Axios, Custom REST APIs      |
| Deployment       | Netlify (frontend), Render (backend)   |
| State/UX         | React Hooks, Popover/Command Menu      |

---

## 🧪 How It Works

### 1. ML Model

- Trained on a dataset of movies with features like **genres, keywords, cast, crew**.
- Calculates a **cosine similarity matrix** using TF-IDF + count vectorization.
- Model & data exported as `similarity.pkl` and `movie_dict.pkl`.

### 2. Recommendation Logic

- When a movie is selected, the backend finds the top 5 most similar movies.
- For each result, it fetches poster info using the TMDb API.

---

## 💡 Future Improvements

- 🎯 Add genre/year filters
- ❤️ Save favorite movies (with local storage or DB)
- 🌐 Multi-language support
- ✨ Loading shimmer & animations
- 🧑‍💻 Switch to collaborative filtering or hybrid model

---

## 👨‍💻 Author

**Devansh Tyagi**
Full-Stack Developer | Machine Learning Enthusiast
📬 [LinkedIn](https://www.linkedin.com/in/devansh-tyagi/) | 🐍 [GitHub](https://github.com/devanshtyagi26)

---

## 🙌 Support

If you like the project, consider giving it a ⭐ on GitHub and sharing it with fellow movie lovers!
