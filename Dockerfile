FROM python:3.11.9-slim-bullseye

WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY . .

# Change to run the app from src/app.py
CMD ["python", "src/app.py"]
