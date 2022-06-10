package com.frank.gerenciadorTarefasAPI.repository;

import com.frank.gerenciadorTarefasAPI.model.ToDo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ToDoRepository extends JpaRepository<ToDo, Long> {
    public List<ToDo> findBySituacao(String situacao);

    public List<ToDo> findBySituacaoOrTituloOrDescricaoOrResponsavelOrId(String situacao, String titulo, String descricao, String responsavel, long id);
}
