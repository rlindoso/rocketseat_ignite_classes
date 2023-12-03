import styles from './Post.module.css';

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github.com/rlindoso.png" />
                    <div className={styles.authorInfo}>
                        <strong>Rafael Lindoso</strong>
                        <span>Full Stack Developer</span>
                    </div>
                </div>

                <time title='December 3rd at 12:54 pm' dateTime='2023-12-03 12:54:47'>Published 1 hour ago</time>
            </header>

            <div className={styles.content}>
                <p>As a passionate Software Developer, I am deeply enthusiastic about all aspects of software development. I have a wealth of experience and knowledge in JavaScript and TypeScript, primarily using Node.js for backend development. Additionally, I have worked on small Python projects, Android applications using Kotlin or Java, desktop projects with Delphi and Java, and embedded projects using Arduino and nodeMCU. I have integrated these projects with backend and mobile platforms, utilizing both HTTP and MQTT protocols.</p>
                <p>My expertise extends to cloud platforms, particularly AWS. I have actively worked with AWS, creating EC2 instances for backend service deployment. I have utilized Nginx as a proxy to route traffic based on DNS configurations. Additionally, I have leveraged Docker and Dockerhub for containerization of projects, Amplify for continuous integration and deployment of frontend projects, DMS for data migration and conversion from non-relational to relational databases, S3 for file storage, SES for email sending, and Lambda for serverless functions. I have also implemented user authentication and login using Cognito.</p>
                <p>My wide range of experience allows me to approach software development with a holistic perspective, ensuring that I can provide comprehensive solutions for various project requirements. I am constantly expanding my knowledge and staying up-to-date with emerging technologies and industry best practices to deliver cutting-edge solutions.</p>
                <p>As an avid learner and dedicated professional, I actively seek out opportunities to enhance my skills through professional development, attending workshops, and staying connected with the developer community. I thrive on challenges and am passionate about delivering high-quality software solutions that meet client needs and exceed expectations.</p>
                <p><a href="https://www.linkedin.com/in/rafael-lindoso-de-araujo/">https://www.linkedin.com/in/rafael-lindoso-de-araujo/</a></p>
                <p>
                    <a href="">#newproject</a>{' '}
                    <a href="">#ignite</a>{' '}
                    <a href="">#rocketseat</a>
                </p>
            </div>
        </article>
    )
}