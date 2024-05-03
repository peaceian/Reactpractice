import styles from './index.module.css';
/* CSS modules are convenient for components that are placed in separate files.
模組內CSS僅適用導入的元件，也不用擔心 CSS name 名稱衝突*/



const Blog = () => {
    return <><h1 className={styles.bigblue}>Blog Articles</h1>
    <p className={styles.bigred}>This is a story</p></>
};
export default Blog;