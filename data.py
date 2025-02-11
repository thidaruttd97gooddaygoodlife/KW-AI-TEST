import random
import pandas as pd

# Generate mock data for 20,000 people
mock_data = {
    'age': [random.randint(18, 80) for _ in range(20000)],
    'weight': [random.randint(45, 100) for _ in range(20000)],
    'height': [random.randint(150, 190) for _ in range(20000)],
    'blood_sugar': [random.choice([None, random.randint(70, 150)]) for _ in range(20000)],
    'a1c': [random.choice([None, round(random.uniform(4, 10), 1)]) for _ in range(20000)],
    'systolic_bp': [random.choice([None, random.randint(90, 180)]) for _ in range(20000)],
    'diastolic_bp': [random.choice([None, random.randint(60, 120)]) for _ in range(20000)],
    'gender': [random.choice(['ชาย', 'หญิง']) for _ in range(20000)],
    'mood': [random.choice(['หัวเราะ', 'ความสุข', 'เฉยๆ', 'หงุดหงิด', 'ป่วย', 'เศร้า', 'โกรธ']) for _ in range(20000)],
    'target': [random.choice([0, 1]) for _ in range(20000)]
}

mock_df = pd.DataFrame(mock_data)
mock_df.to_csv('health_dataset.csv', index=False)  # Save to CSV
