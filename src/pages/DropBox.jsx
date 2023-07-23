import { Card, CardBody, CardHeader, Container } from "reactstrap";
import styles from '../components/header.module.css';


const DropBox = () => {
    return(
        <Container className={styles.container}>
            <div>
                <h1 className={styles.DropBox}>DropBox</h1>
            </div>
            <div>
                <Card>
                    <CardHeader text='center'>
                        Drop Yo shit Here!
                    </CardHeader>
                    <CardBody>
                        Here is where you drop all yo shit 
                    </CardBody>
                </Card>
            </div>
        </Container>
    )   
};

export default DropBox;