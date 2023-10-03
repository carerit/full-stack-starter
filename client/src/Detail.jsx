import placeholder from './assets/placeholder.jpg'


function Detail() {
    return (
        <main className="container">
            <h1>Details</h1>
            <div className='py-4'>
                <div className="card text-center">
                    <div className="card-header">
                        Item
                    </div>
                    <div class="card-body">
                        <img src={placeholder}></img>
                        <h5 class="card-title">Name</h5>
                        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam rutrum maximus nunc at vestibulum. Ut ac sem eget elit tincidunt euismod at eu arcu. Praesent neque ipsum, sodales quis luctus in, elementum et felis. Aenean vehicula malesuada dignissim. Duis non lorem sodales, lobortis odio vitae, egestas ligula. Donec vel cursus sapien, elementum rutrum libero. Curabitur lectus arcu, efficitur in vestibulum vel, placerat in quam. Aenean at posuere nunc. Suspendisse eget congue leo. Nunc eu mi in massa viverra rutrum quis vel quam. Suspendisse a turpis vel dui convallis vulputate. In quis tortor diam. Nullam id risus sed ipsum condimentum suscipit at ut metus.
                            <br></br>
                            Maecenas rutrum mauris at velit ornare vehicula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In elementum sit amet nisl quis vulputate. Mauris semper ultricies semper. Morbi euismod sem ac hendrerit ornare. Mauris ultricies, dolor id luctus eleifend, magna purus tristique justo, in faucibus mi sapien quis nibh. Proin euismod egestas sollicitudin.</p>
                        <a href="/" class="btn btn-primary">Contact</a>
                    </div>
                    <div class="card-footer text-muted">
                        2 days ago
                    </div>
                </div>
            </div>

        </main>
    );
}

export default Detail;