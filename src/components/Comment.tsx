import { Trash } from '@phosphor-icons/react';
import { ThumbsUp } from '@phosphor-icons/react';

import { Avatar } from './Avatar';

import { useState } from 'react';

import styles from './Comment.module.css'

interface CommentsProps {
    content: string;
    onDeleteComment: (comment: string) => void;
}

export function Comment({content, onDeleteComment}: CommentsProps) {
    const [likeCount, setLikeCount] = useState(0);
    
    function handleLikeComment() {
        setLikeCount((state) => {
            return state+1;
        });
    }

    function handleDeleteComment() {
        onDeleteComment(content);
    }
    
    return (
        <div className={styles.comment}>
            <Avatar 
                hasBorder={false}
                src="https://github.com/maykbrito.png"
                alt=''
            />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Mayk Brito</strong>

                            <time title='6 de novembro às 10:19' dateTime='2023-11-06 10:19:00'> Cerca de 1 hora atrás</time>
                        </div>

                        <button onMouseDown={handleDeleteComment} title='Deletar comentário'>
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>{content}</p>
                </div>
                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    );
}