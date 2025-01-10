Here’s the `README.md` file:

```markdown
# ArticleHub: Interactive Article Reading Platform

## Project Overview
ArticleHub is a modern React-based platform designed for an immersive article reading experience. It emphasizes clean UI/UX design, responsive layouts, and efficient state management while providing robust content management features.

---

## Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `npm start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

#### `npm test`
Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`
Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.\
The build is minified, and filenames include hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run eject`
**Note:** This is a one-way operation. Once you `eject`, you can't go back!

---

## Setup Instructions

### Prerequisites
- **Node.js** (latest LTS version recommended)
- **npm** or **yarn** for package management

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/smrutiranjan003/squbix-articlehub.git
   ```
2. Navigate to the project directory:
   ```bash
   cd ArticleHub
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```

---

## Key Features

### Article List View
- **Responsive Grid Layout**: Displays article cards with title, excerpt, category, thumbnail, and more.
- **Filtering & Search**:
  - Filter articles by category.
  - Search with highlighted terms.
  - Sort options: date, reading time, popularity.

### Reading Experience
- Clean typography with adjustable font size.
- Estimated reading time.
- Reading progress indicator.
- Sticky header with title and last edited timestamp.

### Content Management
- **Article Creation**:
  - Rich text editor.
  - Fields for title, excerpt, and tags.
  - Thumbnail upload and preview mode.
- **Article Editing**:
  - Edit articles with full preview mode.
  - Track edit history with timestamps.

### Interactive Features
- **Bookmarking System**: Add/remove bookmarks, persist in localStorage.
- **Sharing Functionality**: Copy link, preview sharing options, and success/error notifications.

---

## Known Limitations
- Limited advanced editing capabilities.
- No backend integration (localStorage used for data persistence).

---

## Future Improvements
- Enable collaborative editing with version control.
- Dark mode support based on system preferences.
- Advanced analytics for reading patterns.

---

## Folder Structure
```plaintext
ArticleHub/
├── README.md          # Project documentation
├── src/               # Source code
│   ├── components/    # Reusable components
│   │   ├── Header.js
│   │   ├── Footer.js
│   │   └── ...
│   ├── pages/         # Page components
│   │   ├── HomePage.js
│   │   └── ...
│   ├── App.js         # Main App component
│   └── index.js       # Entry point
├── public/            # Static assets
│   └── index.html
├── package.json       # Project dependencies and scripts
└── docs/              # Additional documentation
    ├── key_features.md
    ├── known_limitations.md
    └── future_improvements.md
```

---

## Contribution Guidelines
1. Fork the repository.
2. Create a new branch for your feature:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes with meaningful messages:
   ```bash
   git commit -m "Added feature: Article filtering by category"
   ```
4. Push your changes:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request for review.

---

## License
This project is licensed under the MIT License. See the `LICENSE` file for details.

---

### Additional Information

To learn React, check out the [React documentation](https://reactjs.org/).\
For Create React App-specific features, refer to the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
```
