document.addEventListener('DOMContentLoaded', () => {

    

    // --- LÓGICA DO MODAL DO FLUXOGRAMA PRINCIPAL (PÁGINA index.html) ---

    const mainFlowchartData = {
    'step1': { title: 'Início do Ciclo', link: 'fases/fase1.html', description: 'Esta etapa inicial estabelece as bases e os cronogramas para o planejamento anual.' },
    'step2': { title: 'Fase I: Diagnóstico', link: 'fases/fase2.html', description: 'Esta fase é dedicada à coleta de dados primários junto a toda a Rede de Ensino.' },
    'step3': { title: 'Fase II: Análise Técnica', link: 'fases/fase3.html', description: 'Os dados coletados são consolidados e submetidos a uma rigorosa análise técnica pela GPOI para validação.' },
    'step4': { title: 'Fase III: Priorização', link: 'fases/fase4.html', description: 'As necessidades validadas são submetidas a um sistema de pontuação com base em critérios objetivos para criar a Lista Consolidada e Priorizada.' },
    'step5': { title: 'Fase IV: Aquisição', link: 'fases/fase5.html', description: 'A lista priorizada é encaminhada à SUAG para a elaboração do plano de ação para as aquisições e confecção dos Termos de Referência (TR).' },
    'step6': { title: 'Fase V: Execução', link: 'fases/fase6.html', description: 'Fase final do ciclo, na qual a SUAG efetiva os processos de compra e coordena a logística de entrega dos bens às unidades escolares.' }, // Link adicionado
    'step7': { title: 'Fim do Ciclo', link: 'fases/fase7.html', description: 'Com a entrega dos bens, o ciclo se completa. O processo de monitoramento e avaliação fornece subsídios para o aperfeiçoamento contínuo do manual.' } // Link adicionado
};



    const mainModal = document.getElementById('modal');

    if (mainModal) { 

        const modalTitle = document.getElementById('modal-title');

        const modalDescription = document.getElementById('modal-description');

        const closeModalBtn = document.getElementById('modal-close');

        const detailsBtn = document.getElementById('modal-details-btn');

        const clickableItems = document.querySelectorAll('.timeline-content');



        clickableItems.forEach(item => {

            const parentStep = item.closest('.timeline-item');

            if (!parentStep) return;



            item.addEventListener('click', () => {

                const data = mainFlowchartData[parentStep.id];

                if (data) {

                    modalTitle.textContent = data.title;

                    modalDescription.innerHTML = data.description;

                    

                    if (data.link) {

                        detailsBtn.style.display = 'block';

                        detailsBtn.dataset.link = data.link;

                    } else {

                        detailsBtn.style.display = 'none';

                    }

                    

                    mainModal.classList.add('visible');

                }

            });

        });



        const closeModal = () => mainModal.classList.remove('visible');

        closeModalBtn.addEventListener('click', closeModal);

        

        detailsBtn.addEventListener('click', () => {

            const link = detailsBtn.dataset.link;

            if(link) {

                window.location.href = link;

            }

        });

        

        mainModal.addEventListener('click', (e) => { if (e.target === mainModal) closeModal(); });

    }



    // --- LÓGICA PARA O MODAL DE CONTATO (funciona em todas as páginas) ---

    const contactBtn = document.getElementById('contact-btn');

    const contactModal = document.getElementById('contact-modal');

    

    if (contactBtn && contactModal) {

        const closeContactModalBtn = document.getElementById('contact-modal-close');



        contactBtn.addEventListener('click', () => {

            contactModal.classList.add('visible');

        });



        const closeContactModal = () => contactModal.classList.remove('visible');

        

        closeContactModalBtn.addEventListener('click', closeContactModal);

        contactModal.addEventListener('click', (e) => {

            if (e.target === contactModal) {

                closeContactModal();

            }

        });

    }



    // --- LÓGICA GENÉRICA PARA O MODAL DAS PÁGINAS DE DETALHE ---

    const detailModal = document.getElementById('detail-modal');

    // Seleciona todos os cards de processo, EXCETO aquele que tem a classe 'toggle-card'

    const detailClickableBoxes = document.querySelectorAll('.process-card:not(.toggle-card)'); 

    

    if(detailModal && detailClickableBoxes.length > 0) {

        const detailModalTitle = document.getElementById('detail-modal-title');

        const detailModalDescription = document.getElementById('detail-modal-description');

        const closeDetailModalBtn = document.getElementById('detail-modal-close');



        detailClickableBoxes.forEach(box => {

            box.addEventListener('click', () => {

                const title = box.dataset.title;

                const description = box.dataset.description;



                if (title && description) {

                    detailModalTitle.textContent = title;

                    detailModalDescription.innerHTML = description.replace(/\\n/g, '<br>');

                    detailModal.classList.add('visible');

                }

            });

        });

        

        const closeDetailModal = () => detailModal.classList.remove('visible');

        closeDetailModalBtn.addEventListener('click', closeDetailModal);

        detailModal.addEventListener('click', (e) => {

            if(e.target === detailModal) {

                closeDetailModal();

            }

        });

    }



    // --- NOVA LÓGICA PARA MOSTRAR/OCULTAR OS SUBPROCESSOS ---

    const validationToggleBtn = document.getElementById('validation-toggle');

    const subStepWrapper = document.getElementById('sub-step-wrapper');



    if (validationToggleBtn && subStepWrapper) {

        validationToggleBtn.addEventListener('click', () => {

            // A classe 'visible' será adicionada ou removida a cada clique

            subStepWrapper.classList.toggle('visible');

        });

    }

});