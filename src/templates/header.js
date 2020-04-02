const HEADER = () => {
  const VIEW = `
    <nav class="navbar navbar-expand-lg">
      <a class="navbar-brand" href="https://villagrabaez.github.io/100tifi.co-spa/">100tifi.co</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <div class="mr-auto"></div>
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="https://villagrabaez.github.io/100tifi.co-spa/">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#/about/">About</a>
          </li>
        </ul>
      </div>
    </nav>
  `;
  return VIEW
}

export default HEADER