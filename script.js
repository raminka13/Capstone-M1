const speakersArr = [
  {
    spkId: 1,
    name: 'Linus Torvalds',
    title: 'Creator of Linux & Git',
    img: './img/Linus-T-310x310.jpg',
    text: 'Linus Benedict Torvalds; born 28 December 1969 is a Finnish-American software engineer who is the creator and, historically, the main developer of the Linux kernel, used by Linux distributions and other operating systems such as Android.',
  },
  {
    spkId: 2,
    name: 'Jim Zemlin',
    title: 'Executive Director, The Linux Foundation',
    img: './img/Jim-Zemlin.jpeg',
    text: 'Jim has been recognized for his insights on the changing economics of the technology industry. His writing has appeared in Businessweek, Wired, and other top technology journals, and he is a regular keynote speaker at industry events. He advises a variety of startups, including Splashtop, and sits on the boards of the Global Economic Symposium, Open Source For America, and Chinese Open Source Promotion Union.',
  },
  {
    spkId: 3,
    name: 'Matt Butcher',
    title: 'Chief Executive Officer, Fermyon Technologies',
    img: './img/Matt-Butcher.jpg',
    text: 'Matt Butcher (CEO) is a founder of Fermyon. He is one of the original creators of Helm, Brigade, CNAB, OAM, Glide, and Krustlet. He has written or co-written many books, including “Learning Helm” and “Go in Practice.” He is a co-creator of the “Illustrated Children’s Guide to Kubernetes” series. These days, he works mostly on WebAssembly projects such as Spin, Bindle, and Bartholomew. Matt holds a Ph.D. in Philosophy. He lives in Colorado.',
  },
  {
    spkId: 4,
    name: 'Vini Jaiswal',
    title: 'Founding member – Developer Advocacy',
    img: './img/Vini.jpg',
    text: 'Vini Jaiswal is a Founding member of Developer Advocacy at Databricks where she co-leads the advocacy for Open Source projects like Delta Lake. She is a leader and influencer in a global Data and AI community with over a decade of experience, helping advance the greatest companies on the planet, including Unicorns, Digital Natives, and some Fortune 500s.',
  },
  {
    spkId: 5,
    name: 'Arun Gupta',
    title: 'Vice President & General Manager, Intel Corporation',
    img: './img/Arun.jpg',
    text: 'Arun Gupta is vice president and general manager of Open Ecosystem Initiatives at Intel Corporation. As an open source strategist, advocate, and practitioner for nearly two decades, Arun has taken companies such as Apple, Amazon, and Sun Microsystems through systemic changes to embrace open source principles, by contributing and collaborating effectively.',
  },
  {
    spkId: 6,
    name: 'Eric Brewer',
    title: 'Vice President of Infrastructure, Google',
    img: './img/Brewer.jpg',
    text: 'Eric joined Google in 2011 and leads the company’s compute infrastructure design, including Google Cloud Platform, Kubernetes and Anthos. A recent focus is security for open-source software, including supply chain risks and helping start the OpenSSF.',
  },
];

const speakerContainer = document.getElementById('speaker-container');

function createSpeaker(speaker) {
  const spkCard = document.createElement('div');
  const spkImg = document.createElement('img');
  const spkInfo = document.createElement('div');
  const spkName = document.createElement('h4');
  const spkTitle = document.createElement('h6');
  const spkText = document.createElement('p');

  speakerContainer.appendChild(spkCard);
  spkCard.className = 'speaker-card';

  spkCard.appendChild(spkImg);
  spkImg.className = 'speaker-image';
  spkImg.src = speaker.img;
  spkImg.alt = speaker.name;

  spkCard.appendChild(spkInfo);
  spkInfo.className = 'speaker-info';

  const nameNode = document.createTextNode(speaker.name);
  spkInfo.appendChild(spkName);
  spkName.className = 'speaker-name';
  spkName.appendChild(nameNode);

  const titleNode = document.createTextNode(speaker.title);
  spkInfo.appendChild(spkTitle);
  spkTitle.className = 'speaker-title';
  spkTitle.appendChild(titleNode);

  const textNode = document.createTextNode(speaker.text);
  spkInfo.appendChild(spkText);
  spkText.className = 'speaker-text';
  spkText.appendChild(textNode);
}
speakersArr.forEach(createSpeaker);

// Mobile Menu
const mobMenu = document.querySelector('.mobile-menu');
const overlayMenu = document.querySelector('#nav-list');

mobMenu.addEventListener('click', () => {
  mobMenu.classList.toggle('active');
  overlayMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach((n) => n
  .addEventListener('click', () => {
    mobMenu.classList.remove('active');
    overlayMenu.classList.remove('active');
  }));

document.querySelectorAll('#nav-list').forEach((n) => n
  .addEventListener('click', () => {
    mobMenu.classList.remove('active');
    overlayMenu.classList.remove('active');
  }));