class PortfolioApp {
    constructor(data) {
        this.data = data;
        this.sections = [];
        this.initializeSections();
    }

    initializeSections() {
        this.sections = [
            new HeroSection(this.data.hero),
            new AboutSection(this.data.about)
        ];

        // Education ve Experience bölümleri için özel container
        const eduExpContainer = document.createElement('section');
        eduExpContainer.id = 'edu_exp';
        eduExpContainer.className = 'py-5'

        const eduExpWrapper = document.createElement('div');
        eduExpWrapper.className = 'container';

        const eduExpRow = document.createElement('div');
        eduExpRow.className = 'row justify-content-center gy-4';

        const educationSection = new EducationSection(this.data.education);
        const experienceSection = new ExperienceSection(this.data.experience);
        
        eduExpRow.appendChild(educationSection.render());
        eduExpRow.appendChild(experienceSection.render());
        eduExpWrapper.appendChild(eduExpRow);
        eduExpContainer.appendChild(eduExpWrapper);
        
        this.sections.push({
            render: () => eduExpContainer
        });

        this.sections.push(new ProjectsSection(this.data.projects));
        this.sections.push(new BlogsSection(this.data.blogs));
        this.sections.push(new ContactSection(this.data.contact));
    }

    render() {
        const app = document.getElementById('app');
        if (!app) {
            console.error('Root element with id "app" not found');
            return;
        }

        this.sections.forEach(section => {
            app.appendChild(section.render());
        });
    }
}

// Sayfa yüklendiğinde uygulamayı başlat
document.addEventListener('DOMContentLoaded', () => {
    const app = new PortfolioApp(portfolioData);
    app.render();
}); 