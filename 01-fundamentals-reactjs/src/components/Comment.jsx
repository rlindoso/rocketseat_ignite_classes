import styles from './Comment.module.css';
import { ThumbsUp, Trash } from 'phosphor-react';

export function Comment() {
    return (
        <div className={styles.comment}>
            <img src="https://github.com/rlindoso.png" alt='' />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Rafael Lindoso</strong>
                            <time title='December 3rd at 12:54 pm' dateTime='2023-12-03 12:54:47'>Around 2 hour ago</time>
                        </div>
                        
                        <button title='Delete Comment'>
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p>Muito bem!!!</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Clap <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    );
}