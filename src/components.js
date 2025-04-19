class Section {
    constructor(data) {
        this.data = data;
    }

    createTitle(className = '') {
        const title = document.createElement('h2');
        title.textContent = this.data.title;
        title.className = `text-center mb-4 py-2 ${className}`;
        return title;
    }

    createContainer(className = '') {
        const container = document.createElement('div');
        container.className = `container ${className}`;
        return container;
    }

    createRow(className = '') {
        const row = document.createElement('div');
        row.className = `row ${className}`;
        return row;
    }

    createCard(className = '') {
        const card = document.createElement('div');
        card.className = `card ${className}`;
        return card;
    }

    createImageContainer(src, alt, className = '') {
        const img = document.createElement('img');
        img.src = src;
        img.alt = alt;
        img.className = `card-img-top ${className}`;
        return img;
    }

    createBadge(text, className = '') {
        const badge = document.createElement('span');
        badge.className = `badge ${className}`;
        badge.textContent = text;
        return badge;
    }
}

class HeroSection extends Section {
    render() {
        const section = document.createElement('section');
        section.id = this.data.id;
        section.className = 'container px-4';

        const row = document.createElement('div');
        row.className = 'row justify-content-center align-items-center gap-3 py-5';

        // Profile Image
        const imageDiv = document.createElement('div');
        imageDiv.className = 'text-center';
        const img = document.createElement('img');
        img.src = this.data.profileImage;
        img.alt = 'Profile Picture';
        img.className = 'rounded-circle shadow-lg';
        img.width = 200;
        img.height = 200;
        imageDiv.appendChild(img);

        // Personal Info
        const infoDiv = document.createElement('div');
        infoDiv.className = 'text-center';
        const name = document.createElement('h2');
        name.className = 'fw-bold';
        name.textContent = this.data.name;
        const position = document.createElement('p');
        position.className = 'lite-text';
        position.textContent = this.data.position;
        infoDiv.appendChild(name);
        infoDiv.appendChild(position);

        row.appendChild(imageDiv);
        row.appendChild(infoDiv);
        section.appendChild(row);

        return section;
    }
}

class AboutSection extends Section {
    render() {
        const section = document.createElement('section');
        section.id = this.data.id;
        section.className = ' py-5';

        const content = document.createElement('div');
        content.className = 'container col-md-10 px-4'
        const title = document.createElement('h2');
        title.className = 'text-center mb-4 py-2 bg-warning text-black';
        title.textContent = this.data.title;

        const description = document.createElement('p');
        description.className = 'fs-5 px-md-1';
        description.textContent = this.data.description;
        content.appendChild(title);
        content.appendChild(description);
        section.appendChild(content);

        return section;
    }
}

class EducationSection extends Section {
    render() {
        const div = document.createElement('div');
        div.className = 'col-md-6 col-12';

        const title = document.createElement('h3');
        title.className = 'text-center mb-4 py-2 bg-primary text-white';
        title.textContent = this.data.title;

        const timeline = document.createElement('ul');
        timeline.className = 'timeline px-3';

        this.data.items.forEach(item => {
            timeline.appendChild(document.createElement('hr'));
            const li = this.createEducationItem(item);
            timeline.appendChild(li);
        });
        timeline.appendChild(document.createElement('hr'));

        div.appendChild(title);
        div.appendChild(timeline);

        return div;
    }

    createEducationItem(item) {
        const li = document.createElement('li');
        li.innerHTML = `
            <div class="timeline-step">
                <div class="timeline-dot bg-primary"></div>
                <div class="timeline-content">
                    <h5 class="fw-bold">${item.degree}</h5>
                    <p class="lite-text">${item.institution}</p>
                    <p class="lite-text">${item.period}</p>
                </div>
            </div>
        `;
        return li;
    }
}

class ExperienceSection extends Section {
    render() {
        const div = document.createElement('div');
        div.className = 'col-md-6 col-12';

        const title = document.createElement('h3');
        title.className = 'text-center mb-4 py-2 bg-success text-white';
        title.textContent = this.data.title;

        const timeline = document.createElement('ul');
        timeline.className = 'timeline px-3';

        this.data.items.forEach(item => {
            timeline.appendChild(document.createElement('hr'));
            const li = this.createExperienceItem(item);
            timeline.appendChild(li);
        });
        timeline.appendChild(document.createElement('hr'));

        div.appendChild(title);
        div.appendChild(timeline);

        return div;
    }

    createExperienceItem(item) {
        const li = document.createElement('li');
        const technologies = item.technologies.map(tech => 
            `<span class="badge bg-orange black">${tech}</span>`
        ).join(' ');

        li.innerHTML = `
            <div class="timeline-step">
                <div class="timeline-dot bg-success"></div>
                <div class="timeline-content">
                    <h5 class="fw-bold">${item.position}</h5>
                    <p class="lite-text">${item.company}</p>
                    <p class="lite-text">${item.period}</p>
                    <div class="technologies py-1">
                        ${technologies}
                    </div>
                </div>
            </div>
        `;
        return li;
    }
}

class ProjectsSection extends Section {
    render() {
        const section = document.createElement('section');
        section.id = this.data.id;
        section.className = 'py-5';

        const container = document.createElement('div');
        container.className = 'container col-md-10 px-4';

        const title = document.createElement('h2');
        title.className = 'text-center mb-4 bg-maroon py-2';
        title.textContent = this.data.title;

        const row = document.createElement('div');
        row.className = 'row g-4';

        this.data.items.forEach(project => {
            const projectCard = this.createProjectCard(project);
            row.appendChild(projectCard);
        });

        container.appendChild(title);
        container.appendChild(row);
        section.appendChild(container);

        return section;
    }

    createProjectCard(project) {
        const col = document.createElement('div');
        col.className = 'col-12 col-sm-6 col-lg-4 mb-4';
        
        const card = this.createCard('h-100 shadow-sm');
        
        // Resim container'ı
        const imageContainer = this.createImageContainer(
            project.image || `https://api.dicebear.com/7.x/shapes/svg?seed=${encodeURIComponent(project.title)}&backgroundColor=ffdfbf,ffd5dc,c0aede,b6e3f4`,
            project.title
        );
        card.appendChild(imageContainer);

        // Card body
        const cardBody = document.createElement('div');
        cardBody.className = 'card-body d-flex flex-column';

        // Başlık
        const title = document.createElement('h5');
        title.className = 'card-title';
        title.style.overflow = 'hidden';
        title.style.textOverflow = 'ellipsis';
        title.style.display = '-webkit-box';
        title.style.lineClamp = '2';
        title.style.boxOrient = 'vertical';
        title.textContent = project.title;
        cardBody.appendChild(title);

        // Teknolojiler
        const technologiesDiv = document.createElement('div');
        technologiesDiv.className = 'technologies py-1';
        const technologies = project.technologies.map(tech => 
            `<span class="badge bg-orange black">${tech}</span>`
        ).join(' ');
        technologiesDiv.innerHTML = technologies;
        cardBody.appendChild(technologiesDiv);

        // Açıklama
        const description = document.createElement('p');
        description.className = 'card-text multiline-truncate';
        description.textContent = project.description;
        cardBody.appendChild(description);

        // GitHub butonu container
        const buttonContainer = document.createElement('div');
        buttonContainer.className = 'd-flex justify-content-center mt-auto w-100';

        // GitHub butonu
        const button = document.createElement('a');
        button.href = project.githubUrl;
        button.className = 'btn bg-maroon gray fw-bold w-100';
        button.target = '_blank';
        button.innerHTML = '<i class="fa-brands fa-github"></i> View on GitHub';
        buttonContainer.appendChild(button);

        cardBody.appendChild(buttonContainer);
        card.appendChild(cardBody);
        col.appendChild(card);

        return col;
    }
}

class BlogsSection extends Section {
    constructor(data) {
        super(data);
        this.blogs = [];
    }

    render() {
        const section = document.createElement('section');
        section.id = this.data.id;
        section.className = 'py-5';

        const container = document.createElement('div');
        container.className = 'container col-md-10 px-4';
        const title = this.createTitle('bg-dark');

        // Loading spinner
        const loadingSpinner = this.createLoadingSpinner();

        const blogsContainer = document.createElement('div');
        blogsContainer.id = 'blogs-container';
        blogsContainer.className = 'row g-4';

        container.appendChild(title);
        container.appendChild(loadingSpinner);
        container.appendChild(blogsContainer);
        section.appendChild(container);

        // Blog verilerini yükle
        this.loadBlogs().then(() => {
            loadingSpinner.style.display = 'none';
            this.renderBlogs(blogsContainer);
        }).catch(error => {
            loadingSpinner.innerHTML = `<p class="text-danger">Failed to load blogs: ${error.message}</p>`;
            console.error('Error loading blogs:', error);
        });

        return section;
    }

    createLoadingSpinner() {
        const spinner = document.createElement('div');
        spinner.id = 'loading-spinner';
        spinner.className = 'text-center p-4 lite-text';
        spinner.innerHTML = `
            <div class="spinner-border" role="status"></div>
            <p class="mt-2">Loading...</p>
        `;
        return spinner;
    }

    async loadBlogs() {
        try {
            const response = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(this.data.rssFeedUrl)}`);
            const data = await response.json();
            
            if (data.status === 'ok') {
                this.blogs = data.items.map(item => {
                    // İçerikten ilk resmi bul
                    let thumbnailUrl = 'img/blog-placeholder.png';
                    
                    // Önce content içindeki ilk img etiketini ara
                    const imgMatch = item.content.match(/<img[^>]+src="([^">]+)"/);
                    if (imgMatch && imgMatch[1]) {
                        thumbnailUrl = imgMatch[1];
                    }
                    // Eğer content'te resim bulunamadıysa description'da ara
                    else if (item.description) {
                        const descImgMatch = item.description.match(/<img[^>]+src="([^">]+)"/);
                        if (descImgMatch && descImgMatch[1]) {
                            thumbnailUrl = descImgMatch[1];
                        }
                    }
                    // Son olarak thumbnail özelliğini kontrol et
                    else if (item.thumbnail) {
                        thumbnailUrl = item.thumbnail;
                    }

                    return {
                        title: item.title,
                        link: item.link,
                        pubDate: new Date(item.pubDate).toLocaleDateString(),
                        thumbnailUrl: thumbnailUrl
                    };
                });
            } else {
                throw new Error('Failed to fetch blog posts');
            }
        } catch (error) {
            console.error('Error fetching blogs:', error);
            throw error;
        }
    }

    renderBlogs(container) {
        this.blogs.forEach(blog => {
            const blogCard = this.createBlogCard(blog);
            container.appendChild(blogCard);
        });
    }

    createBlogCard(blog) {
        const col = document.createElement('div');
        col.className = 'col-12 col-sm-6 col-lg-4 mb-4';
        
        const link = document.createElement('a');
        link.href = blog.link;
        link.className = 'text-decoration-none';
        link.target = '_blank';

        const card = this.createCard('h-100 shadow-sm');
        
        // Resim container'ı
        const imageContainer = this.createImageContainer(blog.thumbnailUrl, blog.title);
        card.appendChild(imageContainer);

        // Card body
        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';

        // Başlık
        const title = document.createElement('h5');
        title.className = 'card-title';
        title.style.overflow = 'hidden';
        title.style.textOverflow = 'ellipsis';
        title.style.display = '-webkit-box';
        title.style.lineClamp = '2';
        title.style.boxOrient = 'vertical';
        title.textContent = blog.title;
        cardBody.appendChild(title);

        // Tarih
        const date = document.createElement('p');
        date.className = 'lite-text';
        date.textContent = blog.pubDate;
        cardBody.appendChild(date);

        card.appendChild(cardBody);
        link.appendChild(card);
        col.appendChild(link);

        return col;
    }
}

class ContactSection extends Section {
    render() {
        const section = document.createElement('section');
        section.id = this.data.id;
        section.className = 'mt-5 py-5';

        const container = document.createElement('div');
        container.className = 'container px-4';
        const title = this.createTitle('bg-warning text-black');

        const row = document.createElement('div');
        row.className = 'row justify-content-center';

        // Contact Info
        const contactInfo = this.createContactInfo();
        row.appendChild(contactInfo);

        // Contact Form
        const contactForm = this.createContactForm();
        row.appendChild(contactForm);

        container.appendChild(title);
        container.appendChild(row);
        section.appendChild(container);

        // Footer
        const footer = this.createFooter();
        section.appendChild(footer);

        this.setupFormHandler();

        return section;
    }

    createContactInfo() {
        const col = document.createElement('div');
        col.className = 'col-12 col-md-4 mt-5 mt-md-0 row align-items-center px-3';

        const infoDiv = document.createElement('div');
        infoDiv.className = 'text-center text-md-start';

        const title = document.createElement('h5');
        title.className = 'fw-bold';
        title.textContent = 'Get in Touch';

        const hr = document.createElement('hr');

        const email = document.createElement('p');
        email.innerHTML = `<i class="fas fa-envelope me-2"></i>${this.data.email}`;

        const location = document.createElement('p');
        location.innerHTML = `<i class="fas fa-map-marker-alt me-2"></i>${this.data.location}`;

        const socialDiv = document.createElement('div');
        socialDiv.className = 'mt-5 d-flex justify-content-center justify-content-md-start gap-4';

        const socialLinks = [
            { icon: 'fa-instagram', url: this.data.social.instagram },
            { icon: 'fa-medium', url: this.data.social.medium },
            { icon: 'fa-github', url: this.data.social.github },
            { icon: 'fa-twitter', url: this.data.social.twitter }
        ];

        socialLinks.forEach(social => {
            const link = document.createElement('a');
            link.href = social.url;
            link.target = '_blank';
            link.innerHTML = `<i class="fa-brands ${social.icon} fa-2xl silver"></i>`;
            socialDiv.appendChild(link);
        });

        infoDiv.appendChild(title);
        infoDiv.appendChild(hr);
        infoDiv.appendChild(email);
        infoDiv.appendChild(location);
        infoDiv.appendChild(socialDiv);
        col.appendChild(infoDiv);

        return col;
    }

    createContactForm() {
        const col = document.createElement('div');
        col.className = 'col-12 col-md-6 p-3 p-md-4';

        const form = document.createElement('form');
        form.id = 'contactForm';

        const formFields = [
            { type: 'text', id: 'name', label: 'Name', placeholder: 'Your Name' },
            { type: 'text', id: 'subject', label: 'Subject', placeholder: 'Subject' },
            { type: 'textarea', id: 'message', label: 'Message', placeholder: 'Your Message', rows: 5 }
        ];

        formFields.forEach(field => {
            const mb3 = document.createElement('div');
            mb3.className = 'mb-3';

            const label = document.createElement('label');
            label.htmlFor = field.id;
            label.className = 'form-label';
            label.textContent = field.label;

            let input;
            if (field.type === 'textarea') {
                input = document.createElement('textarea');
                input.rows = field.rows;
            } else {
                input = document.createElement('input');
                input.type = field.type;
            }

            input.className = 'form-control';
            input.id = field.id;
            input.name = field.id;
            input.placeholder = field.placeholder;
            input.required = true;

            mb3.appendChild(label);
            mb3.appendChild(input);
            form.appendChild(mb3);
        });

        const buttonDiv = document.createElement('div');
        buttonDiv.className = 'text-end';

        const button = document.createElement('button');
        button.type = 'submit';
        button.className = 'btn btn-warning fw-bold w-100 w-md-auto';
        button.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';

        buttonDiv.appendChild(button);
        form.appendChild(buttonDiv);
        col.appendChild(form);

        return col;
    }

    createFooter() {
        const hr = document.createElement('hr');
        const footer = document.createElement('footer');
        footer.className = 'text-center py-3 fw-bold';
        
        const currentYear = new Date().getFullYear();
        footer.innerHTML = `
            <p>&copy;${currentYear} Dev<span class="text-warning">Folio</span></p>
        `;

        const container = document.createElement('div');
        container.appendChild(hr);
        container.appendChild(footer);

        return container;
    }

    setupFormHandler() {
        setTimeout(() => {
            const form = document.getElementById('contactForm');
            if (form) {
                form.addEventListener('submit', (e) => {
                    e.preventDefault();
    
                    const name = form.elements['name'].value;
                    const subject = form.elements['subject'].value;
                    const message = form.elements['message'].value;
    
                    const mailtoLink = `mailto:${this.data.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`From: ${name}\n\n${message}`)}`;
    
                    window.location.href = mailtoLink; // mailto'yu aç
                    form.reset();
                });
            } else {
                console.warn('Form bulunamadı');
            }
        }, 100); // 100ms ge
    }
    
} 