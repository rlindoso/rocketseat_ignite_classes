import styles from './Sidebar.module.css';

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img 
                className={styles.cover} 
                src="https://images.unsplash.com/photo-1601932239637-c39e96b46c8e?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            />

            <div className={styles.profile}>
                <strong>Melina</strong>
                <span>undefined dog breed</span>
            </div>

            <footer>
                <a href="#">
                    Edit your profile
                </a>
            </footer>
        </aside>
    )
}