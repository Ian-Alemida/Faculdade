public class ArvoreBinaria {

    private No raiz;

    public ArvoreBinaria() {
        this.raiz = null;
    }

    public void inserirNo(int valor) {
        raiz = inserir(raiz, valor);
    }

    private No inserir(No no, int valor) {
        if (no == null) {
            return new No(valor);
        } else if (valor < no.valor) {
            no.esquerda = inserir(no.esquerda, valor);
        } else {
            no.direita = inserir(no.direita, valor);
        }
        return no;
    }

    public void exibirNoEsq() {
        exibirEsquerdo(raiz);
    }

    private void exibirEsquerdo(No no) {
        if (no != null) {
            exibirEsquerdo(no.esquerda);
            System.out.print(no.valor + " ");
        }
    }

    public void exibirNoDir() {
        exibirDireito(raiz);
    }

    private void exibirDireito(No no) {
        if (no != null) {
            exibirDireito(no.direita);
            System.out.print(no.valor + " ");
        }
    }

    public void exibirNo() {
        exibirNoEsq();
        System.out.print("Raiz: " + raiz.valor + " ");
        exibirNoDir();
        System.out.println();
    }

    public No removerNo(int valor) {
        return remover(raiz, valor);
    }

    private No remover(No no, int valor) {
        if (no == null) {
            return null;
        } else if (valor < no.valor) {
            no.esquerda = remover(no.esquerda, valor);
        } else if (valor > no.valor) {
            no.direita = remover(no.direita, valor);
        } else {
            if (no.esquerda == null && no.direita == null) {
                return null;
            } else if (no.esquerda == null) {
                return no.direita;
            } else if (no.direita == null) {
                return no.esquerda;
            } else {
                No sucessor = no.direita;
                while (sucessor.esquerda != null) {
                    sucessor = sucessor.esquerda;
                }
                no.valor = sucessor.valor;
                no.direita = remover(no.direita, sucessor.valor);
            }
        }
        return no;
    }

    public static void main(String[] args) {
        ArvoreBinaria arv = new ArvoreBinaria();

        // Inserindo 5 valores na árvore
        arv.inserirNo(10);
        arv.inserirNo(5);
        arv.inserirNo(15);
        arv.inserirNo(2);
        arv.inserirNo(7);

        // Exibindo os valores da árvore
        arv.exibirNo();

        // Removendo um valor da árvore
        arv.removerNo(15);

        // Exibindo os valores da árvore após a remoção
        arv.exibirNo();
    }
}

class No {

    int valor;
    No esquerda;
    No direita;

    public No(int valor) {
        this.valor = valor;
        this.esquerda = null;
        this.direita = null;
    }
}
