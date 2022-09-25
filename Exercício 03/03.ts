function cumprimento (nome: string, pronome?: string) {
    if(pronome == null) {
      console.log(`Sr. ${nome}`);
    }
    else {
      console.log(`${pronome} ${nome}`)
    }
  }
  cumprimento("Israel", "Sir")
  cumprimento("Israel")