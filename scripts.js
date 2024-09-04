const fileMapping = {
    '강남구': 'gangnam',
    '강동구': 'gangdong',
    '강북구': 'gangbuk',
    '강서구': 'gangseo',
    '관악구': 'kwanak',
    '광진구': 'gwangjin',
    '구로구': 'guro',
    '금천구': 'geumcheon',
    '노원구': 'nowon',
    '도봉구': 'dobong',
    '동대문구': 'dongdaemun',
    '동작구': 'dongjak',
    '마포구': 'mapo',
    '서대문구': 'seodaemun',
    '서초구': 'seocho',
    '성동구': 'seongdong',
    '성북구': 'seongbuk',
    '송파구': 'songpa',
    '양천구': 'yangcheon',
    '영등포구': 'yeongdeungpo',
    '용산구': 'yongsan',
    '은평구': 'eunpyeong',
    '종로구': 'jongno',
    '중구': 'jung',
    '중랑구': 'jungnang',
    //
    '강남': 'gangnam',
    '강동': 'gangdong',
    '강북': 'gangbuk',
    '강서': 'gangseo',
    '관악': 'kwanak',
    '광진': 'gwangjin',
    '구로': 'guro',
    '금천': 'geumcheon',
    '노원': 'nowon',
    '도봉': 'dobong',
    '동대문': 'dongdaemun',
    '동작': 'dongjak',
    '마포': 'mapo',
    '서대문': 'seodaemun',
    '서초': 'seocho',
    '성동': 'seongdong',
    '성북': 'seongbuk',
    '송파': 'songpa',
    '양천': 'yangcheon',
    '영등포': 'yeongdeungpo',
    '용산': 'yongsan',
    '은평': 'eunpyeong',
    '종로': 'jongno',
    '중': 'jung',
    '중랑': 'jungnang',
    '서울' : 'main',
    '서울시' : 'main'

};
// 한글로 입력한 구 이름을 영어로 변환하기 위한 딕셔너리
function navigateToFile() {
    const input = document.getElementById('searchInput').value.trim(); //문서에서 searchInput id가 적용된 값의 내용을 가져와 input에 불러옴
    const englishFileName = fileMapping[input]; //한국어 내용을 찾아 englishFileName 에 저장
 
    if (!englishFileName) {  //만약 영어 파일 이름이 없다면
        alert('해당 구를 찾을 수 없습니다.');
        return false;
    }

    let folderPath = ''; //folderPath 선언 초기화

    if (["gangnam", "seocho", "songpa", "gangdong", "dongjak", "kwanak", "yeongdeungpo", "guro", "geumcheon", "yangcheon", "gangseo"].includes(englishFileName)) { 
        //영어 이름이 이 중(남부)에 있다면
        folderPath = 'south/';
    } else if (["jongno", "jung", "yongsan", "seongdong", "gwangjin", "dongdaemun", "jungnang", "seongbuk", "gangbuk", "dobong", "nowon", "eunpyeong", "seodaemun", "mapo"].includes(englishFileName)) {
        //영어 이름이 이 중(북부)에 있다면
        folderPath = 'north/';
    } 
    const filePath = `${folderPath}${englishFileName}.html`; //파일 경로 설정

    // 파일 경로 설정
        

    // 파일로 이동
    window.location.href = filePath; //해당 경로로 이동

    // 폼 제출 막기
    return false;
}
