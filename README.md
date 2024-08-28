# Warehouse-inventory-application
Building a warehouse application

Pictorial schematics

![image](https://github.com/user-attachments/assets/1d6eabd8-c67d-4d6a-b30d-6b0024fc5fb7)


warehouse-management-system/
│
├── backend/
│   ├── app.py                  # Flask application
│   ├── models.py               # SQLAlchemy models
│   ├── routes.py               # API routes
│   ├── requirements.txt        # Python dependencies
│   ├── Dockerfile              # Dockerfile for the backend
│   └── config.py               # Configuration settings
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── App.js              # Main React component
│   │   ├── StockList.js        # Component to display stock items
│   │   └── index.js            # Entry point
│   ├── Dockerfile              # Dockerfile for the frontend
│   ├── package.json            # Frontend dependencies
│   └── package-lock.json       # Dependency lock file
│
├── k8s/
│   ├── backend-deployment.yaml # K8s deployment for the backend
│   ├── frontend-deployment.yaml # K8s deployment for the frontend
│   ├── backend-service.yaml    # K8s service for backend
│   ├── frontend-service.yaml   # K8s service for frontend
│   ├── ingress.yaml            # K8s ingress configuration
│   └── configmap.yaml          # K8s config map (if needed)
│
└── README.md                   # Project documentation


![Screenshot 2024-08-28 at 05-48-42 Application Data Processing](https://github.com/user-attachments/assets/8bcb5572-e4a4-4eca-beed-ff2ce24eb96c)


