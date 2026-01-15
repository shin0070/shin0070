// Same data as before, but ensure the structure matches the new "cute" theme needs
const editorialsData = [
    {
        id: "사설-01",
        title: "디지털 교육 격차, 공교육이 나서야 한다",
        author: "김한글",
        date: "24.01.10",
        structure: {
            background: "최근 전국 초중고교의 디지털 기기 보급률이 급증하고 있으나, 활용 능력의 격차는 여전히 심각하다.",
            evidence: "교육부 통계에 따르면 수도권과 지방 학생 간의 디지털 리터러시 점수 차이가 20% 이상 벌어졌다.",
            argument: "정부는 기기 보급을 넘어 실질적인 디지털 활용 교육 프로그램을 의무화해야 한다.",
            fact: "현재 디지털 교육 시수는 OECD 평균의 절반 수준인 주당 1시간에 불과하다."
        }
    },
    {
        id: "사설-02",
        title: "기후 위기 대응, 기업의 책임 강화해야",
        author: "이초록",
        date: "24.01.11",
        structure: {
            background: "전 지구적인 이상 기후 현상으로 인한 경제적 피해가 매년 최고치를 경신하고 있다.",
            evidence: "탄소 배출 상위 10개 기업이 전체 배출량의 40%를 차지한다는 환경단체 보고서가 발표되었다.",
            argument: "기업의 ESG 경영을 단순 권고가 아닌 법적 의무 사항으로 강화해야만 실효성을 거둘 수 있다.",
            fact: "유럽연합은 이미 공급망 실사법을 통해 기업의 환경 책임을 법제화했다."
        }
    },
    {
        id: "사설-03",
        title: "저출산 대책, 현금 살포보다 육아 환경 개선을",
        author: "박미래",
        date: "24.01.12",
        structure: {
            background: "합계출산율 0.7명대가 붕괴될 위기에 처했으나, 현금성 지원 정책은 한계를 드러내고 있다.",
            evidence: "출산 장려금을 늘린 지자체에서도 출산율 반등 효과는 미미했다는 연구 결과가 있다.",
            argument: "육아 휴직의 자유로운 사용과 공공 보육 시설 확충 등 '아이 키우기 좋은 환경'을 만드는 것이 우선이다.",
            fact: "한국의 남성 육아휴직 사용률은 제도는 존재하나 실사용률은 5% 내외로 주요국 중 최하위권이다."
        }
    },
    {
        id: "사설-04",
        title: "의대 정원 확대, 지역 의료 붕괴 막을 골든타임",
        author: "최생명",
        date: "24.01.13",
        structure: {
            background: "지방 의료원의 의사 구인난이 심화되면서 응급실 뺑뺑이 등 필수 의료 공백 사태가 잇따르고 있다.",
            evidence: "지방 국립대병원조차 전공의 정원을 채우지 못해 진료 과목을 폐쇄하는 사례가 속출하고 있다.",
            argument: "의대 정원을 대폭 확대하고 지역 의사제를 도입하여 의료 인력의 수도권 쏠림 현상을 막아야 한다.",
            fact: "우리나라 의대 입학 정원은 2006년 이후 18년 동안 동결된 상태다."
        }
    },
    {
        id: "사설-05",
        title: "가계부채 뇌관, 선제적 관리 필요하다",
        author: "정경제",
        date: "24.01.14",
        structure: {
            background: "고금리 기조가 장기화되면서 영끌로 집을 산 2030 세대와 자영업자의 이자 부담이 한계에 다다랐다.",
            evidence: "한국은행 자료에 따르면 가계부채 비율이 GDP 대비 100%를 초과하여 세계 최고 수준을 기록했다.",
            argument: "금융 당국은 대출 만기 연장 등 미봉책이 아닌, 부실 채권 정리와 채무 조정 등 근본적인 디레버리징 정책을 펴야 한다.",
            fact: "연체율이 지난 1년 사이 2배 이상 급증하며 금융권 부실 우려가 커지고 있다."
        }
    },
    {
        id: "사설-06",
        title: "우주 항공청 설립, 미래 산업의 도약대",
        author: "강우주",
        date: "24.01.15",
        structure: {
            background: "뉴스페이스 시대를 맞아 세계 각국이 우주 개발 경쟁에 뛰어들고 있으나, 한국은 컨트롤 타워 부재로 뒤처지고 있다.",
            evidence: "미국 NASA, 일본 JAXA 등 주요국은 전담 기구를 통해 민간 우주 산업을 주도하고 있다.",
            argument: "우주항공청 설립법을 조속히 통과시켜 체계적인 우주 개발 로드맵을 수립하고 민간 기업을 육성해야 한다.",
            fact: "한국의 우주 예산 규모는 미국의 100분의 1 수준에 불과하다."
        }
    },
    {
        id: "사설-07",
        title: "노인 빈곤율 OECD 1위, 연금 개혁 서둘러야",
        author: "오복지",
        date: "24.01.16",
        structure: {
            background: "급격한 고령화 속에 노인 빈곤 문제가 심각한 사회 문제로 대두되고 있으나 국민연금 개혁은 지지부진하다.",
            evidence: "통계청 조사 결과 65세 이상 노인의 상대적 빈곤율은 40%에 육박해 OECD 평균의 3배에 달한다.",
            argument: "보험료율 인상과 소득 대체율 조정을 포함한 사회적 대타협을 통해 연금의 지속 가능성을 확보해야 한다.",
            fact: "국민연금 고갈 시점이 당초 예상보다 2년 앞당겨진 2055년으로 전망되었다."
        }
    },
    {
        id: "사설-08",
        title: "전세 사기 특별법, 피해 구제 실효성 높여야",
        author: "송주택",
        date: "24.01.17",
        structure: {
            background: "빌라왕 사태 등 전세 사기가 전국적으로 확산되며 수많은 세입자들이 보증금을 떼일 위기에 처했다.",
            evidence: "특별법 시행 이후에도 피해자 인정 요건이 까다로워 실제 구제받은 사례는 전체 피해자의 20% 미만이다.",
            argument: "피해자 인정 범위를 확대하고, 선구제 후회수 방안을 도입하여 피해자들의 주거 안정을 보장해야 한다.",
            fact: "전세 사기 피해자의 70%가 사회 초년생인 2030 세대이다."
        }
    },
    {
        id: "사설-09",
        title: "K-콘텐츠 불법 유통, 저작권 보호 시스템 정비 시급",
        author: "문화영",
        date: "24.01.18",
        structure: {
            background: "한국의 영화, 드라마 등 K-콘텐츠가 세계적인 인기를 얻고 있으나, 불법 스트리밍 사이트로 인한 피해도 급증하고 있다.",
            evidence: "업계 추산에 따르면 '누누티비' 등 불법 사이트로 인한 저작권 피해액이 연간 5조 원에 이른다.",
            argument: "국제 공조 수사를 강화하고, 불법 사이트 차단 기술을 고도화하여 창작자들의 권리를 보호해야 한다.",
            fact: "불법 사이트 운영 서버의 대부분이 해외에 있어 국내법만으로는 처벌이 어려운 실정이다."
        }
    },
    {
        id: "사설-10",
        title: "반도체 전쟁, 초격차 기술 확보가 생존 전략",
        author: "반도체부",
        date: "24.01.19",
        structure: {
            background: "미중 패권 경쟁 심화로 글로벌 반도체 공급망이 재편되면서 한국 반도체 산업이 샌드위치 위기에 처했다.",
            evidence: "경쟁국들은 천문학적인 보조금을 지급하며 자국 반도체 생태계를 육성하고 있다.",
            argument: "세제 혜택 확대와 인프라 지원을 통해 기업의 R&D 투자를 유도하고 초격차 기술 경쟁력을 확보해야 한다.",
            fact: "메모리 반도체 분야에서 경쟁국과의 기술 격차가 1년 이내로 좁혀졌다는 분석이 나왔다."
        }
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    const resultsGrid = document.getElementById('resultsGrid');

    renderResults(editorialsData, '', 'all');

    // Filter Button Logic
    const filterButtons = document.querySelectorAll('.filter-btn');
    let currentSearchType = 'all';

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            currentSearchType = btn.getAttribute('data-type');
            updatePlaceholder(currentSearchType);
            performSearch();
        });
    });

    function updatePlaceholder(type) {
        let text = '무엇을 찾아볼까요?';
        switch (type) {
            case 'author': text = '어떤 기자가 썼을까요?'; break;
            case 'structure_bg': text = '어떤 배경으로 시작할까요?'; break;
            case 'structure_evidence': text = '어떤 근거가 있을까요?'; break;
            case 'structure_fact': text = '어떤 팩트가 숨어있을까요?'; break;
        }
        searchInput.placeholder = text;
    }

    function performSearch() {
        const query = searchInput.value.trim().toLowerCase();

        if (!query) {
            renderResults(editorialsData, '', currentSearchType);
            return;
        }

        const filtered = editorialsData.filter(item => {
            if (currentSearchType === 'all') {
                return item.title.toLowerCase().includes(query) ||
                    item.author.toLowerCase().includes(query) ||
                    item.structure.background.toLowerCase().includes(query) ||
                    item.structure.evidence.toLowerCase().includes(query) ||
                    item.structure.argument.toLowerCase().includes(query) ||
                    item.structure.fact.toLowerCase().includes(query);
            } else if (currentSearchType === 'author') {
                return item.author.toLowerCase().includes(query);
            } else if (currentSearchType === 'structure_bg') {
                return item.structure.background.toLowerCase().includes(query);
            } else if (currentSearchType === 'structure_evidence') {
                return item.structure.evidence.toLowerCase().includes(query);
            } else if (currentSearchType === 'structure_fact') {
                return item.structure.fact.toLowerCase().includes(query);
            }
            return false;
        });

        renderResults(filtered, query, currentSearchType);
    }

    function highlightText(text, query) {
        if (!query) return text;
        const regex = new RegExp(`(${query})`, 'gi');
        return text.replace(regex, '<span class="highlight">$1</span>');
    }

    function renderResults(items, query, searchType) {
        resultsGrid.innerHTML = '';

        if (items.length === 0) {
            resultsGrid.innerHTML = `
                <div class="no-results">
                    <p>앗! 찾으시는 내용이 없어요 😢</p>
                </div>
            `;
            return;
        }

        items.forEach((item, index) => {
            const card = document.createElement('div');
            card.className = 'card';
            card.style.animationDelay = `${index * 0.05}s`;

            const hl = (txt) => highlightText(txt, query);

            const createBlock = (type, title, content, icon) => {
                return `
                    <div class="content-block ${type}">
                        <div class="block-label">
                            <span class="icon">${icon}</span> ${title}
                        </div>
                        <div class="block-text">${hl(content)}</div>
                    </div>
                `;
            };

            card.innerHTML = `
                <div class="card-header-area">
                    <span class="card-id">${item.id}</span>
                    <h3 class="card-title">${hl(item.title)}</h3>
                    <div class="card-meta">
                        <span>✏️ ${hl(item.author)}</span>
                        <span>📅 ${item.date}</span>
                    </div>
                </div>
                <div class="card-body">
                    ${createBlock('bg', '배경', item.structure.background, '🌅')}
                    ${createBlock('evidence', '근거', item.structure.evidence, '📊')}
                    ${createBlock('argument', '주장', item.structure.argument, '📢')}
                    ${createBlock('fact', '팩트', item.structure.fact, '💡')}
                </div>
            `;
            resultsGrid.appendChild(card);
        });
    }

    // Input Listeners
    searchBtn.addEventListener('click', performSearch);
    searchInput.addEventListener('input', performSearch);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') performSearch(); // Prevent form submit if any
    });
});
