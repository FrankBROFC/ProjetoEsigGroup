package com.frank.gerenciadorTarefasAPI.model;

import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import javax.validation.constraints.Max;
import javax.validation.constraints.NotNull;
import java.util.Date;

@Entity
public class ToDo implements Comparable<ToDo> {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO,generator = "increment")
    private Long id;

    @Column(nullable = false, length = 50)
    @NotNull
    @Max(50)
    private String titulo;

    private String descricao;

    @Column(nullable = false)
    @NotNull
    private String responsavel;

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    @NotNull
    private String prioridade;

    @Column(nullable = false)
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    @NotNull
    private Date deadline;

    @Column(nullable = false)
    private String situacao;

    public String getSituacao() {
        return situacao;
    }

    public void setSituacao(String situacao) {
        this.situacao = situacao;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public String getResponsavel() {
        return responsavel;
    }

    public void setResponsavel(String responsavel) {
        this.responsavel = responsavel;
    }

    public String getPrioridade() {
        return prioridade;
    }

    public void setPrioridade(String prioridade) {
        this.prioridade = prioridade;
    }

    public Date getDeadline() {
        return deadline;
    }

    public void setDeadline(Date deadline) {
        this.deadline = deadline;
    }

    @Override
    public int compareTo(ToDo o) {
        return this.prioridade.compareTo(o.prioridade);
    }
}
