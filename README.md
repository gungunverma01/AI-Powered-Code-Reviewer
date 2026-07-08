# 🤖 AI Powered Code Reviewer

An AI-powered code review application that analyzes source code, identifies potential issues, suggests improvements, and provides intelligent feedback using Google's Gemini API. The application features a modern React frontend with the Monaco Editor and a Node.js/Express backend for AI-powered code analysis.

---

## 🚀 Features

- ✨ AI-powered code review using Google Gemini API
- 📝 Monaco Editor (VS Code-like editing experience)
- 🎨 Syntax highlighting for code and AI responses
- 📄 Markdown rendering for well-formatted reviews
- ⚡ Real-time code analysis
- 📱 Responsive and modern user interface
- 🔄 Frontend and backend run together using a single command
- 🌐 REST API built with Express.js

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Vite
- Monaco Editor
- Axios
- React Markdown
- Rehype Highlight
- Highlight.js

### Backend
- Node.js
- Express.js
- Google Gemini API
- dotenv
- CORS

---

## 📂 Project Structure

```text
AI-Powered-Code-Reviewer/
│
├── Backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── services/
│   │   └── app.js
│   ├── server.js
│   └── package.json
│
├── Frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── package.json
└── README.md
```

---

## ⚙️ Installation

### Clone the repository

```bash
git clone https://github.com/gungunverma01/AI-Powered-Code-Reviewer.git
cd AI-Powered-Code-Reviewer
```

### Install Root Dependencies

```bash
npm install
```

### Install Backend Dependencies

```bash
cd Backend
npm install
```

### Install Frontend Dependencies

```bash
cd ../Frontend
npm install
```

---

## 🔑 Environment Variables

Create a `.env` file inside the **Backend** folder.

```env
GEMINI_API_KEY=YOUR_GOOGLE_GEMINI_API_KEY
```

---

## ▶️ Run the Project

From the **project root**, run:

```bash
npm run dev
```

This command starts both:

- React Frontend
- Express Backend

simultaneously using **concurrently**.

---



## 📌 How It Works

1. Write or paste code into the Monaco Editor.
2. Click the **Review** button.
3. The frontend sends the code to the Express backend.
4. The backend forwards the request to the Google Gemini API.
5. Gemini analyzes the code and generates an intelligent review.
6. The frontend displays the response as formatted Markdown with syntax highlighting.


---

## 🎯 Future Improvements

- Authentication
- Review history
- Multiple programming language support
- Export review as PDF
- Dark/Light theme
- AI explanation mode
- Copy review button
- Loading animations


---

## 👨‍💻 Author

**Gungun Verma**

- 📧 Email: gungunverma670@gmail.com
- 💼 LinkedIn: https://www.linkedin.com/in/gungun-verma-803460308/
- 🐙 GitHub: https://github.com/gungunverma01
- 🌐 Portfolio: https://gungun-verma-portfolio.vercel.app

---

## ⭐ Support

If you found this project useful, consider giving it a ⭐ on GitHub!

---

## 📄 License

This project is licensed under the MIT License.
