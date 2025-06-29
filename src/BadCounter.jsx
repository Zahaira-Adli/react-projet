// ❌ مثال خاطئ للتوضيح فقط ❌
function BadCounter() {
  let count = 0; // متغير عادي، ماشي حالة (state)

  const handleIncrement = () => {
    count = count + 1;
    console.log(count); // هادي غتخدم فـ console ولكن...
  };

  console.log("المكون كيعاود يترسم");

  return (
    <div>
      {/* ... رياكت عمرو غيعرف أن count تبدلات */}
      <p>لقد نقرت {count} مرات</p> 
      <button onClick={handleIncrement}>إضغط هنا</button>
    </div>
  );
}
export default BadCounter;