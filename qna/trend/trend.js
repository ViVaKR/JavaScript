

// 데이터 예시
const s1 = 1, s2 = 3, s3 = 2, s4 = 4, s5 = 5, s6 = 7;
const l1 = 1, l2 = 2, l3 = 3, l4 = 4, l5 = 5, l6 = 6;
const trend_color = true;

// 트렌드 계산
const trend_up_s = s1 < s2 && s2 < s3 && s3 < s4 && s4 < s5 && s5 < s6;
const trend_up_l = l1 < l2 && l2 < l3 && l3 < l4 && l4 < l5 && l5 < l6;

const trend_down_s = s1 > s2 && s2 > s3 && s3 > s4 && s4 > s5 && s5 > s6;
const trend_down_l = l1 > l2 && l2 > l3 && l3 > l4 && l4 > l5 && l5 > l6;

// 색상 결정
const color_s = trend_color && trend_up_s ? '#32cd32' : trend_color && trend_down_s ? 'red' : trend_color ? 'gray' : '#32cd32';
const color_l = trend_color && trend_up_l ? '#32cd32' : trend_color && trend_down_l ? 'red' : trend_color ? 'gray' : 'red';

// 차트 데이터 설정
const data = {
    labels: ['1', '2', '3', '4', '5', '6'],
    datasets: [
        {
            label: 'Long Trend',
            data: [l1, l2, l3, l4, l5, l6],
            borderColor: color_l,
            borderWidth: 2,
            fill: false
        },
        {
            label: 'Short Trend',
            data: [s1, s2, s3, s4, s5, s6],
            borderColor: color_s,
            borderWidth: 2,
            fill: false
        }
    ]
};

// 차트 옵션 설정
const options = {
    responsive: true,
    scales: {
        x: {
            display: true,
            title: {
                display: true,
                text: 'Index'
            }
        },
        y: {
            display: true,
            title: {
                display: true,
                text: 'Value'
            }
        }
    }
};

// 차트 생성
const ctx = document.getElementById('trendChart').getContext('2d');
const trendChart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: options
});
