const job1 = () => {
    const b = Math.random() * 100; //0.1 초 미만의 속도로 b에 숫자가 담김
    setTimeout(() => {
        console.log('난 1번');
    }, b);
    job2();
};

const job2 = () => {
    const b = Math.random() * 100; //0.1 초 미만의 속도로 b에 숫자가 담김
    setTimeout(() => {
        console.log('난 2번');
    }, b);

    job3();
};

const job3 = () => {
    const b = Math.random() * 100; //0.1 초 미만의 속도로 b에 숫자가 담김
    setTimeout(() => {
        console.log('난 3번');
    }, b);
};

job1();

