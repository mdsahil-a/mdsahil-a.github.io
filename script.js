    document.addEventListener('DOMContentLoaded', () => {
            // --- Project Filtering Logic ---
            const filterButtons = document.querySelectorAll('.filter-btn');
            const projectCards = document.querySelectorAll('.project-card');
const sidebar=document.querySelector(".sidebar");
const cancel=document.querySelector("#cancel");
const navIcon=document.querySelector(".navIcon");

navIcon.addEventListener("click",()=>{
    console.log("clicked")
    sidebar.classList.remove("hidden");
    navIcon.classList.add("hidden");
})

cancel.addEventListener("click",()=>{
     sidebar.classList.add("hidden");
    navIcon.classList.remove("hidden");
})



            filterButtons.forEach(button => {
                button.addEventListener('click', () => {
                    filterButtons.forEach(btn => btn.classList.remove('active'));
                    button.classList.add('active');
                    const filter = button.dataset.filter;

                    projectCards.forEach(card => {
                        const category = card.dataset.category;
                        const shouldShow = filter === 'all' || filter === category;
                        if (shouldShow) {
                           card.classList.remove('hidden');
                        } else {
                            card.classList.add('hidden');
                        }
                    });
                });
            });

            // --- Scroll Animation Logic ---
            const scrollObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, {
                rootMargin: '0px 0px -50px 0px'
            });

            document.querySelectorAll('.reveal').forEach(el => {
                scrollObserver.observe(el);
            });
        });