import { useState } from 'react';
import { Modal, Text, View } from 'react-native';

import { AppButton } from '../components/base/AppButton';
import { AppCard } from '../components/base/AppCard';
import { AppContainer } from '../components/base/AppContainer';
import { AppDialog } from '../components/base/AppDialog';
import { AppToast } from '../components/base/AppToast';
import { TaskForm } from '../components/tasks/TaskForm';
import { TaskSection } from '../components/tasks/TaskSection';
import { useTasks } from '../hooks/useTasks';
import { homeStyles } from '../styles/home.styles';
import { Task, TaskPriority } from '../types/task';

type FeedbackDialog = {
  title: string;
  message: string;
};

export function HomeScreen() {
  const {
    pendingTasks,
    completedTasks,
    addTask,
    updateTask,
    toggleTaskCompletion,
    deleteTask,
  } = useTasks();

  const [newTaskTitle, setNewTaskTitle] = useState<string>('');
  const [newTaskPriority, setNewTaskPriority] = useState<TaskPriority>('medium');
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [editingTitle, setEditingTitle] = useState<string>('');
  const [editingPriority, setEditingPriority] = useState<TaskPriority>('medium');
  const [feedbackDialog, setFeedbackDialog] = useState<FeedbackDialog | null>(null);
  const [taskToDelete, setTaskToDelete] = useState<Task | null>(null);
  const [successToastMessage, setSuccessToastMessage] = useState<string>('');

  function showSuccessToast(message: string): void {
    setSuccessToastMessage(message);
  }

  function handleAddTask(): void {
    const wasCreated = addTask(newTaskTitle, newTaskPriority);

    if (!wasCreated) {
      setFeedbackDialog({
        title: 'Titulo obrigatorio',
        message: 'Digite uma tarefa antes de adicionar.',
      });
      return;
    }

    setNewTaskTitle('');
    setNewTaskPriority('medium');
    showSuccessToast('Tarefa criada com sucesso.');
  }

  function handleOpenEdit(task: Task): void {
    setEditingTask(task);
    setEditingTitle(task.title);
    setEditingPriority(task.priority);
  }

  function handleCloseEdit(): void {
    setEditingTask(null);
    setEditingTitle('');
    setEditingPriority('medium');
  }

  function handleSaveEdit(): void {
    if (!editingTask) {
      return;
    }

    const wasUpdated = updateTask(editingTask.id, {
      title: editingTitle,
      priority: editingPriority,
    });

    if (!wasUpdated) {
      setFeedbackDialog({
        title: 'Titulo obrigatorio',
        message: 'Digite um nome para salvar a tarefa.',
      });
      return;
    }

    handleCloseEdit();
  }

  function handleConfirmDelete(task: Task): void {
    setTaskToDelete(task);
  }

  function handleDeleteTask(): void {
    if (!taskToDelete) {
      return;
    }

    deleteTask(taskToDelete.id);
    setTaskToDelete(null);
    showSuccessToast('Tarefa deletada com sucesso.');
  }

  return (
    <>
      <AppContainer>
        <View style={homeStyles.header}>
          <Text style={homeStyles.eyebrow}>Minhas tarefas</Text>
          <Text style={homeStyles.title}>Organize o que importa hoje.</Text>
          <Text style={homeStyles.subtitle}>
            {pendingTasks.length}{' '}
            {pendingTasks.length === 1 ? 'tarefa pendente' : 'tarefas pendentes'}
          </Text>
        </View>

        <AppCard style={homeStyles.formCard}>
          <TaskForm
            title={newTaskTitle}
            priority={newTaskPriority}
            submitLabel="Adicionar tarefa"
            onTitleChange={setNewTaskTitle}
            onPriorityChange={setNewTaskPriority}
            onSubmit={handleAddTask}
          />
        </AppCard>

        <TaskSection
          title="Pendentes"
          emptyMessage="Nenhuma tarefa pendente por enquanto."
          tasks={pendingTasks}
          onToggleTask={toggleTaskCompletion}
          onEditTask={handleOpenEdit}
          onDeleteTask={handleConfirmDelete}
        />

        <TaskSection
          title="Concluidas"
          emptyMessage="As tarefas concluidas aparecem aqui."
          tasks={completedTasks}
          onToggleTask={toggleTaskCompletion}
          onEditTask={handleOpenEdit}
          onDeleteTask={handleConfirmDelete}
        />

        <Modal
          animationType="slide"
          transparent
          visible={Boolean(editingTask)}
          onRequestClose={handleCloseEdit}
        >
          <View style={homeStyles.modalBackdrop}>
            <View style={homeStyles.modalContent}>
              <View style={homeStyles.modalHandle} />
              <Text style={homeStyles.modalTitle}>Editar tarefa</Text>

              <TaskForm
                title={editingTitle}
                priority={editingPriority}
                submitLabel="Salvar alteracoes"
                showSubmitButton={false}
                onTitleChange={setEditingTitle}
                onPriorityChange={setEditingPriority}
                onSubmit={handleSaveEdit}
              />

              <View style={homeStyles.modalActions}>
                <AppButton
                  title="Cancelar"
                  onPress={handleCloseEdit}
                  variant="secondary"
                  style={homeStyles.modalButton}
                />
                <AppButton
                  title="Salvar"
                  onPress={handleSaveEdit}
                  style={homeStyles.modalButton}
                />
              </View>
            </View>
          </View>
        </Modal>

        <AppDialog
          visible={Boolean(feedbackDialog)}
          title={feedbackDialog?.title ?? ''}
          message={feedbackDialog?.message ?? ''}
          onClose={() => setFeedbackDialog(null)}
        >
          <AppButton
            title="Entendi"
            onPress={() => setFeedbackDialog(null)}
            style={homeStyles.modalButton}
          />
        </AppDialog>

        <AppDialog
          visible={Boolean(taskToDelete)}
          title="Deletar tarefa"
          message={`Tem certeza que deseja deletar "${taskToDelete?.title ?? ''}"?`}
          tone="danger"
          onClose={() => setTaskToDelete(null)}
        >
          <AppButton
            title="Cancelar"
            onPress={() => setTaskToDelete(null)}
            variant="secondary"
            style={homeStyles.modalButton}
          />
          <AppButton
            title="Deletar"
            onPress={handleDeleteTask}
            variant="danger"
            style={homeStyles.modalButton}
          />
        </AppDialog>
      </AppContainer>

      <AppToast
        visible={Boolean(successToastMessage)}
        label="Sucesso"
        message={successToastMessage}
        onHide={() => setSuccessToastMessage('')}
      />
    </>
  );
}
