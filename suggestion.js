//API Open AI
const userHealthData = {
    age: 55,
    weight: 70, // กิโลกรัม
    height: 165, // เซนติเมตร
    bloodSugarLevel: 120, // mg/dL
    bloodPressure: { systolic: 130, diastolic: 85 }, // mmHg
    physicalActivity: 3, // จำนวนการออกกำลังกายต่อสัปดาห์
    foodIntake: { calories: 2200 }, // แคลอรี่ที่บริโภคในแต่ละวัน
    lifestyle: "นั่งทำงานทั้งวัน", // พฤติกรรมการใช้ชีวิต
  };
  
  const prompt = `
  คุณเป็นผู้เชี่ยวชาญด้านสุขภาพและโภชนาการ กรุณาช่วยให้คำแนะนำสำหรับบุคคลที่มีข้อมูลดังนี้:
  อายุ: ${userHealthData.age} ปี
  น้ำหนัก: ${userHealthData.weight} กิโลกรัม
  ความสูง: ${userHealthData.height} เซนติเมตร
  ระดับน้ำตาลในเลือด: ${userHealthData.bloodSugarLevel} mg/dL
  ความดันโลหิต: ${userHealthData.bloodPressure.systolic}/${userHealthData.bloodPressure.diastolic} mmHg
  จำนวนการออกกำลังกายในสัปดาห์: ${userHealthData.physicalActivity} ครั้ง
  การบริโภคแคลอรี่: ${userHealthData.foodIntake.calories} แคลอรี่
  รูปแบบการใช้ชีวิต: ${userHealthData.lifestyle}
  
  กรุณาแนะนำอาหารและการออกกำลังกายที่เหมาะสม รวมถึงบทความหรือคำแนะนำเพิ่มเติม
  `;
  
  openai.chat.completions.create({
    model: "gpt-4o-mini", // ใช้โมเดล GPT-4
    store: true,
    messages: [
      { role: "user", content: prompt },
    ],
  })
  .then((result) => {
    console.log(result.choices[0].message.content); // แสดงผลลัพธ์คำแนะนำจาก AI
  })
  .catch((error) => {
    console.error("Error:", error);
  });
  