function Wrapper(params) {
    <div className="wrapp">
        {params}
    </div>
}
function Child() {
    <>
    <h2>Hi there</h2>
    </>
}
function App() {
    return(
        <Wrapper>
            <Child/>
        </Wrapper>
    )
}