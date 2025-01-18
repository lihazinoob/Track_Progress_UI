# TrackProgress

**TrackProgress** is a comprehensive platform designed to streamline personal and professional task management. Built with modern web technologies, it empowers users to manage their profiles, share updates, collaborate with others, and organize tasks effectively.

---

## 🌟 Features

### 1. **Authentication**
- Secure user authentication using the **Sanctum package** in Laravel.
- User registration and login functionality with token-based authentication.

### 2. **User Management**
- Manage your personal profile: update details and customize your account.
- Post updates and connect with other users.

### 3. **Company Management**
- Create and manage company profiles.
- Assign roles and update company information.

### 4. **Project & Task Management**
- **Projects**:
  - Create multiple projects under a company.
  - Organize and view project details efficiently.
- **Tasks**:
  - Create tasks under specific projects.
  - Assign tasks to users within the company.

### 5. **Hiring System**
- Company creators can hire users under their company.
- Only hired users can be assigned tasks within the organization.

---

## 🛠️ Tech Stack

- **Frontend**: React
- **Backend**: Laravel
- **Database**: MySQL

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v16+)
- PHP (v8+)
- Composer
- MySQL Server

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/TrackProgress.git
   cd TrackProgress
   ```

2. **Backend Setup**:
   ```bash
   cd backend
   composer install
   cp .env.example .env
   php artisan key:generate
   php artisan migrate --seed
   php artisan serve
   ```

3. **Frontend Setup**:
   ```bash
   cd frontend
   npm install
   npm start
   ```

4. **Connect Database**:
   - Update `.env` file in the backend folder with your database credentials.
   ```env
   DB_CONNECTION=mysql
   DB_HOST=127.0.0.1
   DB_PORT=3306
   DB_DATABASE=trackprogress
   DB_USERNAME=root
   DB_PASSWORD=yourpassword
   ```

---

## 📚 API Endpoints

### Authentication
- `POST /login`: Authenticate a user.
- `POST /register`: Register a new user.
- `POST /logout`: Logout the user.

### User Management
- `GET /user`: Fetch user profile.
- `PUT /user/update`: Update user profile.
- `POST /post`: Create a new post.

### Company Management
- `POST /company`: Create a company.
- `PUT /company/{id}`: Update company profile.

### Project & Task Management
- `POST /project`: Create a new project.
- `POST /project/{id}/task`: Add tasks to a project.
- `PUT /task/{id}/assign`: Assign tasks to a user.

---

## 🤝 Contributing
We welcome contributions from the community! To contribute:
1. Fork the repository.
2. Create a new branch: `git checkout -b feature-name`.
3. Commit your changes: `git commit -m 'Add feature-name'`.
4. Push to the branch: `git push origin feature-name`.
5. Open a Pull Request.

---

## 👥 Authors
- **Your Name** - [GitHub](https://github.com/lihazinoob)
- Contributions are welcome from anyone!

---



---

## 📫 Contact
For any inquiries or issues, please open an issue on GitHub or contact us at lihazinaveed@gmail.com.


