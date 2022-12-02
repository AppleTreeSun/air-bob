const theme = {
  color: {
    primaryColor: '#ff385c',
    secondaryColor: '#00848A'
  },
  text: {
    primaryColor: '#484848',
    secondaryColor: '#222'
  },
  mixin: {
    boxShadow: `
      transition: box-shabow 200ms ease;
      &:hover {
        box-shadow: 0 2px 4px rgba(0,0,0,.18);
      }
    `,
    singleLine: `
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    `,
    doubleLine: `
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    `
  }
}

export default theme