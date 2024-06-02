/* Delete these styles and add your own styles here! */

body {
    font-size: var(--font-3);
  }

  header {
    background: var(--purple);
    color: var(--white);
    padding: var(--spacing-6) var(--spacing-0) var(--spacing-6);
    text-align: center;
  }

  .banner {
    position: absolute;
    top: -10px;
    left: var(--spacing-4);
  }

  .banner img {
    height: 80px;
  }

  .banner:hover img {
    animation: wave-flag 0.5s linear infinite alternate;
  }

  @media (prefers-reduced-motion: reduce) {
    .banner:hover img {
      transition: 0.1875s cubic-bezier(0.375, 0, 0.675, 1) transform;
      transform-origin: top left;
    }
  }

  @keyframes wave-flag {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(-5deg);
    }
  }

  header > p, header > p > a{
    color: var(--white)!important;
  }

  .container {
    margin: var(--spacing-4) auto;
  }

  .blurb {
    border: 2px dashed var(--border);
    border-radius: var(--radii-default);
    font-size: var(--font-4);
    padding: var(--spacing-4);
  }

  .title {
    margin-bottom: var(--spacing-4);
  }