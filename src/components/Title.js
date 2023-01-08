import './Title.scss';

export function Title(props) {
    if (props.type === 'primary') {
        return (
            <div className="title-primary">
                <h1>{props.title}</h1>
            </div>
        )
    } else if(props.type === 'secondary') {
        return (
            <div className="title-secondary">
                <div className="container">
                    <h1>{props.title}</h1>
                </div>
            </div>
        )
    } else if(props.type === 'tertiary') {
        return(
            <h2 className='title-tertiary'>{props.title}</h2>
        )
    }
}