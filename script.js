// ========================================
// FUNCIONALIDADE DOS LIKES
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    // Seleciona todos os botões de like
    const likeButtons = document.querySelectorAll('article button:not(.btn-tema-escuro)');
    
    likeButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            const span = this.querySelector('span');
            let count = parseInt(span.textContent, 10);
            
            if (this.classList.contains('liked')) {
                count--;
                this.classList.remove('liked');
                this.style.transform = 'scale(0.9)';
                setTimeout(() => {
                    this.style.transform = 'scale(1)';
                }, 200);
            } else {
                count++;
                this.classList.add('liked');
                this.style.transform = 'scale(1.2)';
                setTimeout(() => {
                    this.style.transform = 'scale(1)';
                }, 200);
                
                // Efeito de coração pulsante
                this.innerHTML = '❤️ Curtir (<span>' + count + '</span>)';
                setTimeout(() => {
                    this.innerHTML = '👍 Curtir (<span>' + count + '</span>)';
                }, 800);
            }
            span.textContent = count;
        });
    });

    // ========================================
    // FUNCIONALIDADE DO TEMA ESCURO
    // ========================================

    const themeBtn = document.querySelector('.btn-tema-escuro');
    
    themeBtn.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        
        if (document.body.classList.contains('dark-mode')) {
            this.textContent = '☀️';
            this.style.transform = 'rotate(360deg)';
        } else {
            this.textContent = '🌙';
            this.style.transform = 'rotate(0deg)';
        }
        
        // Reset da rotação após animação
        setTimeout(() => {
            this.style.transform = 'scale(1.1)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 200);
        }, 300);
    });

    // ========================================
    // EFEITO DE CLICK NAS IMAGENS
    // ========================================

    const images = document.querySelectorAll('.image-container');
    
    images.forEach(container => {
        container.addEventListener('click', function() {
            const img = this.querySelector('img');
            img.style.transform = 'scale(0.95)';
            img.style.borderColor = '#ff6b6b';
            
            setTimeout(() => {
                img.style.transform = 'scale(1)';
                img.style.borderColor = '';
            }, 300);
        });
    });

    console.log('🚀 Site RasinformaticA carregado com sucesso!');
});
