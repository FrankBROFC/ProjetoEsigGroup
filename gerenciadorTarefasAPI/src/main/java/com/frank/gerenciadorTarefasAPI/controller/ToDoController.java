package com.frank.gerenciadorTarefasAPI.controller;

import com.frank.gerenciadorTarefasAPI.dto.ToDoBuscaDTO;
import com.frank.gerenciadorTarefasAPI.model.ToDo;
import com.frank.gerenciadorTarefasAPI.repository.ToDoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

@RestController
public class ToDoController {
    private final ToDoRepository toDoRepository;

    @Autowired
    public ToDoController(ToDoRepository toDoRepository) {
        this.toDoRepository = toDoRepository;
    }

    @GetMapping("/todos")
    public List<ToDo> findAll() {
        return toDoRepository.findAll();
    }

    @GetMapping("/todo")
    public List<ToDo> findBySituacao(@RequestParam String situacao) {
        List<ToDo> bySituacao = toDoRepository.findBySituacao(situacao);
        Collections.sort(bySituacao);
        return bySituacao;
    }

    @GetMapping("/todo/{id}")
    public Optional<ToDo> findById(@PathVariable long id) {
        return toDoRepository.findById(id);
    }

    @GetMapping("/todo/buscar")
    public List<ToDo> buscarTodo(ToDoBuscaDTO toDo) {

        return toDoRepository.findBySituacaoOrTituloOrDescricaoOrResponsavelOrId(toDo.getSituacao(), toDo.getTitulo(), toDo.getDescricao(), toDo.getResponsavel(), toDo.getId());
    }

    @PostMapping("/todo")
    public void save(@RequestBody ToDo toDo) {
        toDo.setSituacao("PENDENTE");

        toDoRepository.save(toDo);
    }

    @DeleteMapping("/todo/{id}")
    public void delete(@PathVariable long id) {
        toDoRepository.deleteById(id);
    }

    @PutMapping("/todo/updateSituacao/{id}")
    public Optional<ToDo> updateSituacao(@PathVariable long id) {
        return toDoRepository.findById(id).map(toDo -> {
            toDo.setSituacao("CONCLUIDO");
            return toDoRepository.save(toDo);
        });
    }

    @PutMapping("/todo/{id}")
    public ToDo update(@PathVariable long id, @RequestBody ToDo toDoSend) {
        return toDoRepository.findById(id).map(toDo -> {
            toDo.setDeadline(toDoSend.getDeadline());
            toDo.setDescricao(toDoSend.getDescricao());
            toDo.setPrioridade(toDoSend.getPrioridade());
            toDo.setTitulo(toDoSend.getTitulo());
            toDo.setSituacao(toDoSend.getSituacao());
            toDo.setResponsavel(toDoSend.getResponsavel());
            return toDoRepository.save(toDo);
        }).orElseGet(() -> toDoRepository.save(toDoSend));
    }
}
