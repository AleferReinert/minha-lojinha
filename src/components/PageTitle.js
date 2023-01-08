import './PageTitle.scss';

export function PageTitle(props){
    return(
        <div className="page-title">
            <div className="container">
                <h1>{ props.title }</h1>
            </div>
        </div>
    )
}