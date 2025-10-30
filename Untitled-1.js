/* ==========================================================
   🐾 PET CLUB ESTÉTICA ANIMAL - SCRIPT PRINCIPAL
   Criado por: Fantasminha Dev (Braian Apolinario da Silva)
   ========================================================== */

// ======== ANIMAÇÃO DE PARTÍCULAS NO HEADER ========
for (let i = 0; i < 50; i++) {
  const particle = document.createElement('div');
  particle.classList.add('particle');
  particle.style.left = Math.random() * 100 + "vw";
  particle.style.width = particle.style.height = Math.random() * 8 + 5 + "px";
  particle.style.animationDuration = (Math.random() * 5 + 5) + "s";
  document.getElementById('particles').appendChild(particle);
}

// ======== ANIMAÇÃO DE SCROLL SUAVE ========
const sections = document.querySelectorAll('section');
window.addEventListener('scroll', () => {
  let scrollY = window.scrollY + window.innerHeight - 100;
  sections.forEach(section => {
    if (scrollY > section.offsetTop) {
      section.classList.add('visible');
    }
  });
});

// ======== INTERAÇÃO 3D NOS CARDS ========
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * 10;
    const rotateY = ((x - centerX) / centerX) * 10;
    card.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'rotateX(0deg) rotateY(0deg)';
  });
});

// ======== FORMULÁRIO DE CADASTRO DE CLIENTES E PETS ========
const signupForm = document.getElementById('signupForm');
const petGallery = document.getElementById('petGallery');

if (signupForm) {
  signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const clientName = document.getElementById('clientName').value;
    const clientEmail = document.getElementById('clientEmail').value;
    const petName = document.getElementById('petName').value;
    const petSpecies = document.getElementById('petSpecies').value;
    const petAge = document.getElementById('petAge').value;

    const card = document.createElement('div');
    card.classList.add('pet-card');
    card.innerHTML = `
      <div class="pet-avatar">🐶</div>
      <h3>${petName}</h3>
      <p><strong>Espécie:</strong> ${petSpecies}</p>
      <p><strong>Idade:</strong> ${petAge} anos</p>
    `;

    petGallery.appendChild(card);
    signupForm.reset();

    // Animação ao aparecer
    setTimeout(() => {
      card.classList.add('visible');
    }, 100);
  });
}

// ======== BOTÃO FLUTUANTE DE WHATSAPP ========
const whatsappButton = document.createElement('a');
whatsappButton.id = 'whatsapp';
whatsappButton.href = 'https://wa.me/5567998121012';
whatsappButton.target = '_blank';
whatsappButton.innerHTML = '💬';
document.body.appendChild(whatsappButton);

// ======== ESTILO DO BOTÃO WHATSAPP VIA JS ========
const style = document.createElement('style');
style.innerHTML = `
  #whatsapp {
    position: fixed;
    bottom: 25px;
    right: 25px;
    background-color: #25d366;
    color: white;
    font-size: 28px;
    width: 60px;
    height: 60px;
    text-align: center;
    line-height: 60px;
    border-radius: 50%;
    box-shadow: 0 5px 20px rgba(0,0,0,0.3);
    text-decoration: none;
    transition: 0.3s;
    animation: pulse 1.8s infinite;
    z-index: 999;
  }
  #whatsapp:hover {
    transform: scale(1.15);
    box-shadow: 0 10px 25px rgba(0,0,0,0.4);
  }
  @keyframes pulse {
    0% { box-shadow: 0 0 0 0 rgba(37,211,102,0.6); }
    70% { box-shadow: 0 0 0 20px rgba(37,211,102,0); }
    100% { box-shadow: 0 0 0 0 rgba(37,211,102,0); }
  }
`;
document.head.appendChild(style);
