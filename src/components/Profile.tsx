import styles from '../styles/components/Profile.module.css'

export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="https://avatars.githubusercontent.com/u/67883555?s=460&u=e653152f8d3db3066fadb5cca035476d27dce4df&v=4" alt="Raissa Boeng" />
            <div>
                <strong>Raissa Boeng</strong>
                <p> <img src="icons/level.svg" alt="Level" /> Level 1</p>
            </div>
        </div>
    )
}