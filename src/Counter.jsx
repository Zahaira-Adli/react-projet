import React, { useState } from 'react';

function Counter() {
  // 1. عرفنا حالة جديدة سميتها count، وكتبدا من 0
  const [count, setCount] = useState(0);

  // هادي دالة عادية ديال جافاسكريبت غنعيطو ليها من بعد
  const handleIncrement = () => {
    // 2. كنستعملو الدالة setCount باش نزيدو 1 على القيمة القديمة
    setCount(count + 1);
  };

  return (
    <div>
      {/* 3. كنعرضو القيمة الحالية ديال count فالشاشة */}
      <p>لقد نقرت {count} مرات</p>
      
      {/* 4. ملي كنكليكيو على الزر، كنعيطو على الدالة ديالنا */}
      <button onClick={handleIncrement}>
        إضغط هنا
      </button>
    </div>
  );
}
export default Counter;