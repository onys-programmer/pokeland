const pokemonList = [
  {
    "id": 1,
    "name": "이상해씨",
    "type": "풀, 독",
    "height": "0.7m",
    "category": "씨앗포켓몬",
    "gender": "",
    "weight": "6.9kg",
    "abilities": "심록"
  },
  {
    "id": 2,
    "name": "이상해풀",
    "type": "풀, 독",
    "height": "1.0m",
    "category": "씨앗포켓몬",
    "gender": "",
    "weight": "13.0kg",
    "abilities": "심록"
  },
  {
    "id": 3,
    "name": "이상해꽃",
    "type": "풀, 독",
    "height": "2.0m",
    "category": "씨앗포켓몬",
    "gender": "",
    "weight": "100.0kg",
    "abilities": "심록"
  },
  {
    "id": 4,
    "name": "파이리",
    "type": "불꽃",
    "height": "0.6m",
    "category": "도롱뇽포켓몬",
    "gender": "",
    "weight": "8.5kg",
    "abilities": "맹화"
  },
  {
    "id": 5,
    "name": "리자드",
    "type": "불꽃",
    "height": "1.1m",
    "category": "화염포켓몬",
    "gender": "",
    "weight": "19.0kg",
    "abilities": "맹화"
  },
  {
    "id": 6,
    "name": "리자몽",
    "type": "불꽃, 비행",
    "height": "1.7m",
    "category": "화염포켓몬",
    "gender": "",
    "weight": "90.5kg",
    "abilities": "맹화"
  },
  {
    "id": 7,
    "name": "꼬부기",
    "type": "물",
    "height": "0.5m",
    "category": "꼬마거북포켓몬",
    "gender": "",
    "weight": "9.0kg",
    "abilities": "급류"
  },
  {
    "id": 8,
    "name": "어니부기",
    "type": "물",
    "height": "1.0m",
    "category": "거북포켓몬",
    "gender": "",
    "weight": "22.5kg",
    "abilities": "급류"
  },
  {
    "id": 9,
    "name": "거북왕",
    "type": "물",
    "height": "1.6m",
    "category": "껍질포켓몬",
    "gender": "",
    "weight": "85.5kg",
    "abilities": "급류"
  },
  {
    "id": 10,
    "name": "캐터피",
    "type": "벌레",
    "height": "0.3m",
    "category": "애벌레포켓몬",
    "gender": "",
    "weight": "2.9kg",
    "abilities": "인분"
  },
  {
    "id": 11,
    "name": "단데기",
    "type": "벌레",
    "height": "0.7m",
    "category": "번데기포켓몬",
    "gender": "",
    "weight": "9.9kg",
    "abilities": "탈피"
  },
  {
    "id": 12,
    "name": "버터플",
    "type": "벌레, 비행",
    "height": "1.1m",
    "category": "나비포켓몬",
    "gender": "",
    "weight": "32.0kg",
    "abilities": "복안"
  },
  {
    "id": 13,
    "name": "뿔충이",
    "type": "벌레, 독",
    "height": "0.3m",
    "category": "송충이포켓몬",
    "gender": "",
    "weight": "3.2kg",
    "abilities": "인분"
  },
  {
    "id": 14,
    "name": "딱충이",
    "type": "벌레, 독",
    "height": "0.6m",
    "category": "번데기포켓몬",
    "gender": "",
    "weight": "10.0kg",
    "abilities": "탈피"
  },
  {
    "id": 15,
    "name": "독침붕",
    "type": "벌레, 독",
    "height": "1.0m",
    "category": "독벌포켓몬",
    "gender": "",
    "weight": "29.5kg",
    "abilities": "벌레의알림"
  },
  {
    "id": 16,
    "name": "구구",
    "type": "노말, 비행",
    "height": "0.3m",
    "category": "아기새포켓몬",
    "gender": "",
    "weight": "1.8kg",
    "abilities": "날카로운눈"
  },
  {
    "id": 17,
    "name": "피죤",
    "type": "노말, 비행",
    "height": "1.1m",
    "category": "새포켓몬",
    "gender": "",
    "weight": "30.0kg",
    "abilities": "날카로운눈"
  },
  {
    "id": 18,
    "name": "피죤투",
    "type": "노말, 비행",
    "height": "1.5m",
    "category": "새포켓몬",
    "gender": "",
    "weight": "39.5kg",
    "abilities": "날카로운눈"
  },
  {
    "id": 19,
    "name": "꼬렛",
    "type": "노말",
    "height": "0.3m",
    "category": "쥐포켓몬",
    "gender": "",
    "weight": "3.5kg",
    "abilities": "도주"
  },
  {
    "id": 20,
    "name": "레트라",
    "type": "노말",
    "height": "0.7m",
    "category": "쥐포켓몬",
    "gender": "",
    "weight": "18.5kg",
    "abilities": "도주"
  },
  {
    "id": 21,
    "name": "깨비참",
    "type": "노말, 비행",
    "height": "0.3m",
    "category": "아기새포켓몬",
    "gender": "",
    "weight": "2.0kg",
    "abilities": "날카로운눈"
  },
  {
    "id": 22,
    "name": "깨비드릴조",
    "type": "노말, 비행",
    "height": "1.2m",
    "category": "부리포켓몬",
    "gender": "",
    "weight": "38.0kg",
    "abilities": "날카로운눈"
  },
  {
    "id": 23,
    "name": "아보",
    "type": "독",
    "height": "2.0m",
    "category": "뱀포켓몬",
    "gender": "",
    "weight": "6.9kg",
    "abilities": "위협"
  },
  {
    "id": 24,
    "name": "아보크",
    "type": "독",
    "height": "3.5m",
    "category": "코브라포켓몬",
    "gender": "",
    "weight": "65.0kg",
    "abilities": "위협"
  },
  {
    "id": 25,
    "name": "피카츄",
    "type": "전기",
    "height": "0.4m",
    "category": "쥐포켓몬",
    "gender": "",
    "weight": "6.0kg",
    "abilities": "정전기"
  },
  {
    "id": 26,
    "name": "라이츄",
    "type": "전기",
    "height": "0.8m",
    "category": "쥐포켓몬",
    "gender": "",
    "weight": "30.0kg",
    "abilities": "정전기"
  },
  {
    "id": 27,
    "name": "모래두지",
    "type": "땅",
    "height": "0.6m",
    "category": "쥐포켓몬",
    "gender": "",
    "weight": "12.0kg",
    "abilities": "모래숨기"
  },
  {
    "id": 28,
    "name": "고지",
    "type": "땅",
    "height": "1.0m",
    "category": "쥐포켓몬",
    "gender": "",
    "weight": "29.5kg",
    "abilities": "모래숨기"
  },
  {
    "id": 29,
    "name": "니드런♀",
    "type": "독",
    "height": "0.4m",
    "category": "독침포켓몬",
    "gender": "",
    "weight": "7.0kg",
    "abilities": "독가시"
  },
  {
    "id": 30,
    "name": "니드리나",
    "type": "독",
    "height": "0.8m",
    "category": "독침포켓몬",
    "gender": "",
    "weight": "20.0kg",
    "abilities": "독가시"
  },
  {
    "id": 31,
    "name": "니드퀸",
    "type": "독, 땅",
    "height": "1.3m",
    "category": "드릴포켓몬",
    "gender": "",
    "weight": "60.0kg",
    "abilities": "독가시"
  },
  {
    "id": 32,
    "name": "니드런♂",
    "type": "독",
    "height": "0.5m",
    "category": "독침포켓몬",
    "gender": "",
    "weight": "9.0kg",
    "abilities": "독가시"
  },
  {
    "id": 33,
    "name": "니드리노",
    "type": "독",
    "height": "0.9m",
    "category": "독침포켓몬",
    "gender": "",
    "weight": "19.5kg",
    "abilities": "독가시"
  },
  {
    "id": 34,
    "name": "니드킹",
    "type": "독, 땅",
    "height": "1.4m",
    "category": "드릴포켓몬",
    "gender": "",
    "weight": "62.0kg",
    "abilities": "독가시"
  },
  {
    "id": 35,
    "name": "삐삐",
    "type": "페어리",
    "height": "0.6m",
    "category": "요정포켓몬",
    "gender": "",
    "weight": "7.5kg",
    "abilities": "헤롱헤롱바디"
  },
  {
    "id": 36,
    "name": "픽시",
    "type": "페어리",
    "height": "1.3m",
    "category": "요정포켓몬",
    "gender": "",
    "weight": "40.0kg",
    "abilities": "헤롱헤롱바디"
  },
  {
    "id": 37,
    "name": "식스테일",
    "type": "불꽃",
    "height": "0.6m",
    "category": "여우포켓몬",
    "gender": "",
    "weight": "9.9kg",
    "abilities": "타오르는불꽃"
  },
  {
    "id": 38,
    "name": "나인테일",
    "type": "불꽃",
    "height": "1.1m",
    "category": "여우포켓몬",
    "gender": "",
    "weight": "19.9kg",
    "abilities": "타오르는불꽃"
  },
  {
    "id": 39,
    "name": "푸린",
    "type": "노말, 페어리",
    "height": "0.5m",
    "category": "풍선포켓몬",
    "gender": "",
    "weight": "5.5kg",
    "abilities": "헤롱헤롱바디"
  },
  {
    "id": 40,
    "name": "푸크린",
    "type": "노말, 페어리",
    "height": "1.0m",
    "category": "풍선포켓몬",
    "gender": "",
    "weight": "12.0kg",
    "abilities": "헤롱헤롱바디"
  },
  {
    "id": 41,
    "name": "주뱃",
    "type": "독, 비행",
    "height": "0.8m",
    "category": "박쥐포켓몬",
    "gender": "",
    "weight": "7.5kg",
    "abilities": "정신력"
  },
  {
    "id": 42,
    "name": "골뱃",
    "type": "독, 비행",
    "height": "1.6m",
    "category": "박쥐포켓몬",
    "gender": "",
    "weight": "55.0kg",
    "abilities": "정신력"
  },
  {
    "id": 43,
    "name": "뚜벅쵸",
    "type": "풀, 독",
    "height": "0.5m",
    "category": "잡초포켓몬",
    "gender": "",
    "weight": "5.4kg",
    "abilities": "엽록소"
  },
  {
    "id": 44,
    "name": "냄새꼬",
    "type": "풀, 독",
    "height": "0.8m",
    "category": "잡초포켓몬",
    "gender": "",
    "weight": "8.6kg",
    "abilities": "엽록소"
  },
  {
    "id": 45,
    "name": "라플레시아",
    "type": "풀, 독",
    "height": "1.2m",
    "category": "꽃포켓몬",
    "gender": "",
    "weight": "18.6kg",
    "abilities": "엽록소"
  },
  {
    "id": 46,
    "name": "파라스",
    "type": "벌레, 풀",
    "height": "0.3m",
    "category": "버섯포켓몬",
    "gender": "",
    "weight": "5.4kg",
    "abilities": "포자"
  },
  {
    "id": 47,
    "name": "파라섹트",
    "type": "벌레, 풀",
    "height": "1.0m",
    "category": "버섯포켓몬",
    "gender": "",
    "weight": "29.5kg",
    "abilities": "포자"
  },
  {
    "id": 48,
    "name": "콘팡",
    "type": "벌레, 독",
    "height": "1.0m",
    "category": "곤충포켓몬",
    "gender": "",
    "weight": "30.0kg",
    "abilities": "복안"
  },
  {
    "id": 49,
    "name": "도나리",
    "type": "벌레, 독",
    "height": "1.5m",
    "category": "독나방포켓몬",
    "gender": "",
    "weight": "12.5kg",
    "abilities": "인분"
  },
  {
    "id": 50,
    "name": "디그다",
    "type": "땅",
    "height": "0.2m",
    "category": "두더지포켓몬",
    "gender": "",
    "weight": "0.8kg",
    "abilities": "모래숨기"
  },
  {
    "id": 51,
    "name": "닥트리오",
    "type": "땅",
    "height": "0.7m",
    "category": "두더지포켓몬",
    "gender": "",
    "weight": "33.3kg",
    "abilities": "모래숨기"
  },
  {
    "id": 52,
    "name": "나옹",
    "type": "노말",
    "height": "0.4m",
    "category": "요괴고양이포켓몬",
    "gender": "",
    "weight": "4.2kg",
    "abilities": "픽업"
  },
  {
    "id": 53,
    "name": "페르시온",
    "type": "노말",
    "height": "1.0m",
    "category": "샴고양이포켓몬",
    "gender": "",
    "weight": "32.0kg",
    "abilities": "유연"
  },
  {
    "id": 54,
    "name": "고라파덕",
    "type": "물",
    "height": "0.8m",
    "category": "오리포켓몬",
    "gender": "",
    "weight": "19.6kg",
    "abilities": "습기"
  },
  {
    "id": 55,
    "name": "골덕",
    "type": "물",
    "height": "1.7m",
    "category": "오리포켓몬",
    "gender": "",
    "weight": "76.6kg",
    "abilities": "습기"
  },
  {
    "id": 56,
    "name": "망키",
    "type": "격투",
    "height": "0.5m",
    "category": "돈숭이포켓몬",
    "gender": "",
    "weight": "28.0kg",
    "abilities": "의기양양"
  },
  {
    "id": 57,
    "name": "성원숭",
    "type": "격투",
    "height": "1.0m",
    "category": "돈숭이포켓몬",
    "gender": "",
    "weight": "32.0kg",
    "abilities": "의기양양"
  },
  {
    "id": 58,
    "name": "가디",
    "type": "불꽃",
    "height": "0.7m",
    "category": "강아지포켓몬",
    "gender": "",
    "weight": "19.0kg",
    "abilities": "위협"
  },
  {
    "id": 59,
    "name": "윈디",
    "type": "불꽃",
    "height": "1.9m",
    "category": "전설포켓몬",
    "gender": "",
    "weight": "155.0kg",
    "abilities": "위협"
  },
  {
    "id": 60,
    "name": "발챙이",
    "type": "물",
    "height": "0.6m",
    "category": "올챙이포켓몬",
    "gender": "",
    "weight": "12.4kg",
    "abilities": "저수"
  },
  {
    "id": 61,
    "name": "슈륙챙이",
    "type": "물",
    "height": "1.0m",
    "category": "올챙이포켓몬",
    "gender": "",
    "weight": "20.0kg",
    "abilities": "저수"
  },
  {
    "id": 62,
    "name": "강챙이",
    "type": "물, 격투",
    "height": "1.3m",
    "category": "올챙이포켓몬",
    "gender": "",
    "weight": "54.0kg",
    "abilities": "저수"
  },
  {
    "id": 63,
    "name": "캐이시",
    "type": "에스퍼",
    "height": "0.9m",
    "category": "초능력포켓몬",
    "gender": "",
    "weight": "19.5kg",
    "abilities": "싱크로"
  },
  {
    "id": 64,
    "name": "윤겔라",
    "type": "에스퍼",
    "height": "1.3m",
    "category": "초능력포켓몬",
    "gender": "",
    "weight": "56.5kg",
    "abilities": "싱크로"
  },
  {
    "id": 65,
    "name": "후딘",
    "type": "에스퍼",
    "height": "1.5m",
    "category": "초능력포켓몬",
    "gender": "",
    "weight": "48.0kg",
    "abilities": "싱크로"
  },
  {
    "id": 66,
    "name": "알통몬",
    "type": "격투",
    "height": "0.8m",
    "category": "괴력포켓몬",
    "gender": "",
    "weight": "19.5kg",
    "abilities": "근성"
  },
  {
    "id": 67,
    "name": "근육몬",
    "type": "격투",
    "height": "1.5m",
    "category": "괴력포켓몬",
    "gender": "",
    "weight": "70.5kg",
    "abilities": "근성"
  },
  {
    "id": 68,
    "name": "괴력몬",
    "type": "격투",
    "height": "1.6m",
    "category": "괴력포켓몬",
    "gender": "",
    "weight": "130.0kg",
    "abilities": "근성"
  },
  {
    "id": 69,
    "name": "모다피",
    "type": "풀, 독",
    "height": "0.7m",
    "category": "꽃포켓몬",
    "gender": "",
    "weight": "4.0kg",
    "abilities": "엽록소"
  },
  {
    "id": 70,
    "name": "우츠동",
    "type": "풀, 독",
    "height": "1.0m",
    "category": "파리잡이포켓몬",
    "gender": "",
    "weight": "6.4kg",
    "abilities": "엽록소"
  },
  {
    "id": 71,
    "name": "우츠보트",
    "type": "풀, 독",
    "height": "1.7m",
    "category": "파리잡이포켓몬",
    "gender": "",
    "weight": "15.5kg",
    "abilities": "엽록소"
  },
  {
    "id": 72,
    "name": "왕눈해",
    "type": "물, 독",
    "height": "0.9m",
    "category": "해파리포켓몬",
    "gender": "",
    "weight": "45.5kg",
    "abilities": "클리어바디"
  },
  {
    "id": 73,
    "name": "독파리",
    "type": "물, 독",
    "height": "1.6m",
    "category": "해파리포켓몬",
    "gender": "",
    "weight": "55.0kg",
    "abilities": "클리어바디"
  },
  {
    "id": 74,
    "name": "꼬마돌",
    "type": "바위, 땅",
    "height": "0.4m",
    "category": "암석포켓몬",
    "gender": "",
    "weight": "20.0kg",
    "abilities": "돌머리"
  },
  {
    "id": 75,
    "name": "데구리",
    "type": "바위, 땅",
    "height": "1.0m",
    "category": "암석포켓몬",
    "gender": "",
    "weight": "105.0kg",
    "abilities": "돌머리"
  },
  {
    "id": 76,
    "name": "딱구리",
    "type": "바위, 땅",
    "height": "1.4m",
    "category": "메가톤포켓몬",
    "gender": "",
    "weight": "300.0kg",
    "abilities": "돌머리"
  },
  {
    "id": 77,
    "name": "포니타",
    "type": "불꽃",
    "height": "1.0m",
    "category": "불의말포켓몬",
    "gender": "",
    "weight": "30.0kg",
    "abilities": "도주"
  },
  {
    "id": 78,
    "name": "날쌩마",
    "type": "불꽃",
    "height": "1.7m",
    "category": "불의말포켓몬",
    "gender": "",
    "weight": "95.0kg",
    "abilities": "도주"
  },
  {
    "id": 79,
    "name": "야돈",
    "type": "물, 에스퍼",
    "height": "1.2m",
    "category": "얼간이포켓몬",
    "gender": "",
    "weight": "36.0kg",
    "abilities": "둔감"
  },
  {
    "id": 80,
    "name": "야도란",
    "type": "물, 에스퍼",
    "height": "1.6m",
    "category": "기생포켓몬",
    "gender": "",
    "weight": "78.5kg",
    "abilities": "둔감"
  },
  {
    "id": 81,
    "name": "코일",
    "type": "전기, 강철",
    "height": "0.3m",
    "category": "자석포켓몬",
    "gender": "불명",
    "weight": "6.0kg",
    "abilities": "자력"
  },
  {
    "id": 82,
    "name": "레어코일",
    "type": "전기, 강철",
    "height": "1.0m",
    "category": "자석포켓몬",
    "gender": "불명",
    "weight": "60.0kg",
    "abilities": "자력"
  },
  {
    "id": 83,
    "name": "파오리",
    "type": "노말, 비행",
    "height": "0.8m",
    "category": "청둥오리포켓몬",
    "gender": "",
    "weight": "15.0kg",
    "abilities": "날카로운눈"
  },
  {
    "id": 84,
    "name": "두두",
    "type": "노말, 비행",
    "height": "1.4m",
    "category": "쌍둥이새포켓몬",
    "gender": "",
    "weight": "39.2kg",
    "abilities": "도주"
  },
  {
    "id": 85,
    "name": "두트리오",
    "type": "노말, 비행",
    "height": "1.8m",
    "category": "세쌍둥이새포켓몬",
    "gender": "",
    "weight": "85.2kg",
    "abilities": "도주"
  },
  {
    "id": 86,
    "name": "쥬쥬",
    "type": "물",
    "height": "1.1m",
    "category": "강치포켓몬",
    "gender": "",
    "weight": "90.0kg",
    "abilities": "두꺼운지방"
  },
  {
    "id": 87,
    "name": "쥬레곤",
    "type": "물, 얼음",
    "height": "1.7m",
    "category": "강치포켓몬",
    "gender": "",
    "weight": "120.0kg",
    "abilities": "두꺼운지방"
  },
  {
    "id": 88,
    "name": "질퍽이",
    "type": "독",
    "height": "0.9m",
    "category": "진흙포켓몬",
    "gender": "",
    "weight": "30.0kg",
    "abilities": "악취"
  },
  {
    "id": 89,
    "name": "질뻐기",
    "type": "독",
    "height": "1.2m",
    "category": "진흙포켓몬",
    "gender": "",
    "weight": "30.0kg",
    "abilities": "악취"
  },
  {
    "id": 90,
    "name": "셀러",
    "type": "물",
    "height": "0.3m",
    "category": "두조개포켓몬",
    "gender": "",
    "weight": "4.0kg",
    "abilities": "조가비갑옷"
  },
  {
    "id": 91,
    "name": "파르셀",
    "type": "물, 얼음",
    "height": "1.5m",
    "category": "두조개포켓몬",
    "gender": "",
    "weight": "132.5kg",
    "abilities": "조가비갑옷"
  },
  {
    "id": 92,
    "name": "고오스",
    "type": "고스트, 독",
    "height": "1.3m",
    "category": "가스포켓몬",
    "gender": "",
    "weight": "0.1kg",
    "abilities": "부유"
  },
  {
    "id": 93,
    "name": "고우스트",
    "type": "고스트, 독",
    "height": "1.6m",
    "category": "가스포켓몬",
    "gender": "",
    "weight": "0.1kg",
    "abilities": "부유"
  },
  {
    "id": 94,
    "name": "팬텀",
    "type": "고스트, 독",
    "height": "1.5m",
    "category": "그림자포켓몬",
    "gender": "",
    "weight": "40.5kg",
    "abilities": "저주받은바디"
  },
  {
    "id": 95,
    "name": "롱스톤",
    "type": "바위, 땅",
    "height": "8.8m",
    "category": "돌뱀포켓몬",
    "gender": "",
    "weight": "210.0kg",
    "abilities": "돌머리"
  },
  {
    "id": 96,
    "name": "슬리프",
    "type": "에스퍼",
    "height": "1.0m",
    "category": "최면포켓몬",
    "gender": "",
    "weight": "32.4kg",
    "abilities": "불면"
  },
  {
    "id": 97,
    "name": "슬리퍼",
    "type": "에스퍼",
    "height": "1.6m",
    "category": "최면포켓몬",
    "gender": "",
    "weight": "75.6kg",
    "abilities": "불면"
  },
  {
    "id": 98,
    "name": "크랩",
    "type": "물",
    "height": "0.4m",
    "category": "게포켓몬",
    "gender": "",
    "weight": "6.5kg",
    "abilities": "괴력집게"
  },
  {
    "id": 99,
    "name": "킹크랩",
    "type": "물",
    "height": "1.3m",
    "category": "집게포켓몬",
    "gender": "",
    "weight": "60.0kg",
    "abilities": "괴력집게"
  },
  {
    "id": 100,
    "name": "찌리리공",
    "type": "전기",
    "height": "0.5m",
    "category": "볼포켓몬",
    "gender": "불명",
    "weight": "10.4kg",
    "abilities": "방음"
  },
  {
    "id": 101,
    "name": "붐볼",
    "type": "전기",
    "height": "1.2m",
    "category": "볼포켓몬",
    "gender": "불명",
    "weight": "66.6kg",
    "abilities": "방음"
  },
  {
    "id": 102,
    "name": "아라리",
    "type": "풀, 에스퍼",
    "height": "0.4m",
    "category": "알포켓몬",
    "gender": "",
    "weight": "2.5kg",
    "abilities": "엽록소"
  },
  {
    "id": 103,
    "name": "나시",
    "type": "풀, 에스퍼",
    "height": "2.0m",
    "category": "야자열매포켓몬",
    "gender": "",
    "weight": "120.0kg",
    "abilities": "엽록소"
  },
  {
    "id": 104,
    "name": "탕구리",
    "type": "땅",
    "height": "0.4m",
    "category": "고독포켓몬",
    "gender": "",
    "weight": "6.5kg",
    "abilities": "돌머리"
  },
  {
    "id": 105,
    "name": "텅구리",
    "type": "땅",
    "height": "1.0m",
    "category": "뼈다귀포켓몬",
    "gender": "",
    "weight": "45.0kg",
    "abilities": "돌머리"
  },
  {
    "id": 106,
    "name": "시라소몬",
    "type": "격투",
    "height": "1.5m",
    "category": "킥포켓몬",
    "gender": "",
    "weight": "49.8kg",
    "abilities": "유연"
  },
  {
    "id": 107,
    "name": "홍수몬",
    "type": "격투",
    "height": "1.4m",
    "category": "펀치포켓몬",
    "gender": "",
    "weight": "50.2kg",
    "abilities": "날카로운눈"
  },
  {
    "id": 108,
    "name": "내루미",
    "type": "노말",
    "height": "1.2m",
    "category": "핥기포켓몬",
    "gender": "",
    "weight": "65.5kg",
    "abilities": "마이페이스"
  },
  {
    "id": 109,
    "name": "또가스",
    "type": "독",
    "height": "0.6m",
    "category": "독가스포켓몬",
    "gender": "",
    "weight": "1.0kg",
    "abilities": "부유"
  },
  {
    "id": 110,
    "name": "또도가스",
    "type": "독",
    "height": "1.2m",
    "category": "독가스포켓몬",
    "gender": "",
    "weight": "9.5kg",
    "abilities": "부유"
  },
  {
    "id": 111,
    "name": "뿔카노",
    "type": "땅, 바위",
    "height": "1.0m",
    "category": "뿔포켓몬",
    "gender": "",
    "weight": "115.0kg",
    "abilities": "피뢰침"
  },
  {
    "id": 112,
    "name": "코뿌리",
    "type": "땅, 바위",
    "height": "1.9m",
    "category": "드릴포켓몬",
    "gender": "",
    "weight": "120.0kg",
    "abilities": "피뢰침"
  },
  {
    "id": 113,
    "name": "럭키",
    "type": "노말",
    "height": "1.1m",
    "category": "알포켓몬",
    "gender": "",
    "weight": "34.6kg",
    "abilities": "자연회복"
  },
  {
    "id": 114,
    "name": "덩쿠리",
    "type": "풀",
    "height": "1.0m",
    "category": "넝쿨포켓몬",
    "gender": "",
    "weight": "35.0kg",
    "abilities": "엽록소"
  },
  {
    "id": 115,
    "name": "캥카",
    "type": "노말",
    "height": "2.2m",
    "category": "가족포켓몬",
    "gender": "",
    "weight": "80.0kg",
    "abilities": "일찍기상"
  },
  {
    "id": 116,
    "name": "쏘드라",
    "type": "물",
    "height": "0.4m",
    "category": "드래곤포켓몬",
    "gender": "",
    "weight": "8.0kg",
    "abilities": "쓱쓱"
  },
  {
    "id": 117,
    "name": "시드라",
    "type": "물",
    "height": "1.2m",
    "category": "드래곤포켓몬",
    "gender": "",
    "weight": "25.0kg",
    "abilities": "독가시"
  },
  {
    "id": 118,
    "name": "콘치",
    "type": "물",
    "height": "0.6m",
    "category": "금붕어포켓몬",
    "gender": "",
    "weight": "15.0kg",
    "abilities": "쓱쓱"
  },
  {
    "id": 119,
    "name": "왕콘치",
    "type": "물",
    "height": "1.3m",
    "category": "금붕어포켓몬",
    "gender": "",
    "weight": "39.0kg",
    "abilities": "쓱쓱"
  },
  {
    "id": 120,
    "name": "별가사리",
    "type": "물",
    "height": "0.8m",
    "category": "별포켓몬",
    "gender": "불명",
    "weight": "34.5kg",
    "abilities": "발광"
  },
  {
    "id": 121,
    "name": "아쿠스타",
    "type": "물, 에스퍼",
    "height": "1.1m",
    "category": "수수께끼포켓몬",
    "gender": "불명",
    "weight": "80.0kg",
    "abilities": "발광"
  },
  {
    "id": 122,
    "name": "마임맨",
    "type": "에스퍼, 페어리",
    "height": "1.3m",
    "category": "배리어포켓몬",
    "gender": "",
    "weight": "54.5kg",
    "abilities": "방음"
  },
  {
    "id": 123,
    "name": "스라크",
    "type": "벌레, 비행",
    "height": "1.5m",
    "category": "버마재비포켓몬",
    "gender": "",
    "weight": "56.0kg",
    "abilities": "벌레의알림"
  },
  {
    "id": 124,
    "name": "루주라",
    "type": "얼음, 에스퍼",
    "height": "1.4m",
    "category": "인간형태포켓몬",
    "gender": "",
    "weight": "40.6kg",
    "abilities": "둔감"
  },
  {
    "id": 125,
    "name": "에레브",
    "type": "전기",
    "height": "1.1m",
    "category": "전기포켓몬",
    "gender": "",
    "weight": "30.0kg",
    "abilities": "정전기"
  },
  {
    "id": 126,
    "name": "마그마",
    "type": "불꽃",
    "height": "1.3m",
    "category": "불뿜기포켓몬",
    "gender": "",
    "weight": "44.5kg",
    "abilities": "불꽃몸"
  },
  {
    "id": 127,
    "name": "쁘사이저",
    "type": "벌레",
    "height": "1.5m",
    "category": "뿔집게포켓몬",
    "gender": "",
    "weight": "55.0kg",
    "abilities": "괴력집게"
  },
  {
    "id": 128,
    "name": "켄타로스",
    "type": "노말",
    "height": "1.4m",
    "category": "성난소포켓몬",
    "gender": "",
    "weight": "88.4kg",
    "abilities": "위협"
  },
  {
    "id": 129,
    "name": "잉어킹",
    "type": "물",
    "height": "0.9m",
    "category": "물고기포켓몬",
    "gender": "",
    "weight": "10.0kg",
    "abilities": "쓱쓱"
  },
  {
    "id": 130,
    "name": "갸라도스",
    "type": "물, 비행",
    "height": "6.5m",
    "category": "흉악포켓몬",
    "gender": "",
    "weight": "235.0kg",
    "abilities": "위협"
  },
  {
    "id": 131,
    "name": "라프라스",
    "type": "물, 얼음",
    "height": "2.5m",
    "category": "탈것포켓몬",
    "gender": "",
    "weight": "220.0kg",
    "abilities": "저수"
  },
  {
    "id": 132,
    "name": "메타몽",
    "type": "노말",
    "height": "0.3m",
    "category": "변신포켓몬",
    "gender": "불명",
    "weight": "4.0kg",
    "abilities": "유연"
  },
  {
    "id": 133,
    "name": "이브이",
    "type": "노말",
    "height": "0.3m",
    "category": "진화포켓몬",
    "gender": "",
    "weight": "6.5kg",
    "abilities": "도주"
  },
  {
    "id": 134,
    "name": "샤미드",
    "type": "물",
    "height": "1.0m",
    "category": "거품뿜기포켓몬",
    "gender": "",
    "weight": "29.0kg",
    "abilities": "저수"
  },
  {
    "id": 135,
    "name": "쥬피썬더",
    "type": "전기",
    "height": "0.8m",
    "category": "번개포켓몬",
    "gender": "",
    "weight": "24.5kg",
    "abilities": "축전"
  },
  {
    "id": 136,
    "name": "부스터",
    "type": "불꽃",
    "height": "0.9m",
    "category": "불꽃포켓몬",
    "gender": "",
    "weight": "25.0kg",
    "abilities": "타오르는불꽃"
  },
  {
    "id": 137,
    "name": "폴리곤",
    "type": "노말",
    "height": "0.8m",
    "category": "가상포켓몬",
    "gender": "불명",
    "weight": "36.5kg",
    "abilities": "트레이스"
  },
  {
    "id": 138,
    "name": "암나이트",
    "type": "바위, 물",
    "height": "0.4m",
    "category": "소용돌이포켓몬",
    "gender": "",
    "weight": "7.5kg",
    "abilities": "쓱쓱"
  },
  {
    "id": 139,
    "name": "암스타",
    "type": "바위, 물",
    "height": "1.0m",
    "category": "소용돌이포켓몬",
    "gender": "",
    "weight": "35.0kg",
    "abilities": "쓱쓱"
  },
  {
    "id": 140,
    "name": "투구",
    "type": "바위, 물",
    "height": "0.5m",
    "category": "껍질포켓몬",
    "gender": "",
    "weight": "11.5kg",
    "abilities": "쓱쓱"
  },
  {
    "id": 141,
    "name": "투구푸스",
    "type": "바위, 물",
    "height": "1.3m",
    "category": "껍질포켓몬",
    "gender": "",
    "weight": "40.5kg",
    "abilities": "쓱쓱"
  },
  {
    "id": 142,
    "name": "프테라",
    "type": "바위, 비행",
    "height": "1.8m",
    "category": "화석포켓몬",
    "gender": "",
    "weight": "59.0kg",
    "abilities": "돌머리"
  },
  {
    "id": 143,
    "name": "잠만보",
    "type": "노말",
    "height": "2.1m",
    "category": "졸음포켓몬",
    "gender": "",
    "weight": "460.0kg",
    "abilities": "면역"
  },
  {
    "id": 144,
    "name": "프리져",
    "type": "얼음, 비행",
    "height": "1.7m",
    "category": "냉동포켓몬",
    "gender": "불명",
    "weight": "55.4kg",
    "abilities": "프레셔"
  },
  {
    "id": 145,
    "name": "썬더",
    "type": "전기, 비행",
    "height": "1.6m",
    "category": "전기포켓몬",
    "gender": "불명",
    "weight": "52.6kg",
    "abilities": "프레셔"
  },
  {
    "id": 146,
    "name": "파이어",
    "type": "불꽃, 비행",
    "height": "2.0m",
    "category": "화염포켓몬",
    "gender": "불명",
    "weight": "60.0kg",
    "abilities": "프레셔"
  },
  {
    "id": 147,
    "name": "미뇽",
    "type": "드래곤",
    "height": "1.8m",
    "category": "드래곤포켓몬",
    "gender": "",
    "weight": "3.3kg",
    "abilities": "탈피"
  },
  {
    "id": 148,
    "name": "신뇽",
    "type": "드래곤",
    "height": "4.0m",
    "category": "드래곤포켓몬",
    "gender": "",
    "weight": "16.5kg",
    "abilities": "탈피"
  },
  {
    "id": 149,
    "name": "망나뇽",
    "type": "드래곤, 비행",
    "height": "2.2m",
    "category": "드래곤포켓몬",
    "gender": "",
    "weight": "210.0kg",
    "abilities": "정신력"
  },
  {
    "id": 150,
    "name": "뮤츠",
    "type": "에스퍼",
    "height": "2.0m",
    "category": "유전포켓몬",
    "gender": "불명",
    "weight": "122.0kg",
    "abilities": "프레셔"
  },
  {
    "id": 151,
    "name": "뮤",
    "type": "에스퍼",
    "height": "0.4m",
    "category": "신종포켓몬",
    "gender": "불명",
    "weight": "4.0kg",
    "abilities": "싱크로"
  }
];

export default pokemonList;
