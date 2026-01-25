<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex">

    <!-- Sidebar -->
    <aside class="w-72 bg-slate-900/50 backdrop-blur-sm text-white flex flex-col border-r border-slate-700/50">
      <div class="p-6 border-b border-slate-700/50">
        <div class="flex items-center gap-3">
          <div
            class="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center"
          >
            <span class="text-xl">🏋️</span>
          </div>
          <div>
            <h1 class="text-xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Forgy Admin</h1>
            <p class="text-xs text-slate-400">Panel de Control</p>
          </div>
        </div>
      </div>

      <nav class="flex-1 p-4">
        <p class="text-xs text-slate-500 uppercase tracking-wider mb-3 px-3">Menú Principal</p>
        <ul class="space-y-1">
          <li>
            <a
              href="#"
              @click.prevent="currentView = 'exercises'"
              :class="[
                'flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-200',
                currentView === 'exercises'
                  ? 'bg-gradient-to-r from-indigo-600/80 to-purple-600/80 text-white shadow-lg shadow-indigo-500/25'
                  : 'text-slate-400 hover:bg-slate-800/50 hover:text-white'
              ]"
            >
              <span class="text-lg">🏋️</span>
              <span class="font-medium">Ejercicios</span>
              <span class="ml-auto bg-indigo-500/30 text-indigo-300 text-xs px-2 py-1 rounded-full">{{ exercises.length
              }}</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              @click.prevent="currentView = 'routines'"
              :class="[
                'flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-200',
                currentView === 'routines'
                  ? 'bg-gradient-to-r from-indigo-600/80 to-purple-600/80 text-white shadow-lg shadow-indigo-500/25'
                  : 'text-slate-400 hover:bg-slate-800/50 hover:text-white'
              ]"
            >
              <span class="text-lg">📅</span>
              <span class="font-medium">Rutinas</span>
              <span class="ml-auto bg-purple-500/30 text-purple-300 text-xs px-2 py-1 rounded-full">{{ routines.length }}</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              @click.prevent="currentView = 'stats'"
              :class="[
                'flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-200',
                currentView === 'stats'
                  ? 'bg-gradient-to-r from-indigo-600/80 to-purple-600/80 text-white shadow-lg shadow-indigo-500/25'
                  : 'text-slate-400 hover:bg-slate-800/50 hover:text-white'
              ]"
            >
              <span class="text-lg">📊</span>
              <span class="font-medium">Estadísticas</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center gap-3 px-3 py-3 rounded-xl text-slate-500 cursor-not-allowed"
            >
              <span class="text-lg">🥗</span>
              <span>Alimentos</span>
              <span class="ml-auto text-xs bg-slate-700/50 px-2 py-1 rounded-full">Pronto</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center gap-3 px-3 py-3 rounded-xl text-slate-500 cursor-not-allowed"
            >
              <span class="text-lg">👥</span>
              <span>Usuarios</span>
              <span class="ml-auto text-xs bg-slate-700/50 px-2 py-1 rounded-full">Pronto</span>
            </a>
          </li>
        </ul>
      </nav>

      <div class="p-4 border-t border-slate-700/50">
        <div class="flex items-center gap-3 px-3 py-2">
          <div
            class="w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-sm"
          >
            👤
          </div>
          <div class="flex-1">
            <p class="text-sm font-medium">Admin User</p>
            <p class="text-xs text-slate-400">admin@forgy.app</p>
          </div>
        </div>
      </div>
    </aside>

    <!-- Main Content -->
    <main class="flex-1 overflow-auto">
      <!-- Header -->
      <header class="bg-slate-800/50 backdrop-blur-sm border-b border-slate-700/50 px-8 py-4 sticky top-0 z-10">
        <div class="flex justify-between items-center">
          <div>
            <h1 class="text-2xl font-bold text-white">
              {{ currentView === 'exercises' ? 'Gestión de Ejercicios' : (currentView === 'routines' ? 'Gestión de Rutinas' : 'Estadísticas') }}
            </h1>
            <p class="text-slate-400 text-sm">{{ currentView === 'exercises' ? 'Administra el catálogo de ejercicios' : (currentView === 'routines' ? 'Crea y gestiona las rutinas de los usuarios' : 'Resumen del sistema') }}</p>
          </div>
          <div class="flex items-center gap-3">
            <span class="flex items-center gap-2 text-sm text-green-400">
              <span class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              Servidor conectado
            </span>
            <button class="bg-slate-700/50 text-slate-300 px-4 py-2 rounded-xl hover:bg-slate-700 transition-colors">
              🔔
            </button>
          </div>
        </div>
      </header>

      <!-- Content Area -->
      <div class="p-8">
        <!-- Exercises View -->
        <div v-if="currentView === 'exercises'">
          <!-- Action Bar -->
          <div class="flex flex-wrap gap-4 mb-6">
            <div class="flex-1 min-w-64">
              <div class="relative">
                <span class="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">🔍</span>
                <input
                  v-model="searchText"
                  type="text"
                  placeholder="Buscar ejercicios..."
                  class="w-full bg-slate-800/50 border border-slate-700/50 rounded-xl py-3 pl-12 pr-4 text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all"
                />
              </div>
            </div>
            <select
              v-model="filterMuscle"
              class="bg-slate-800/50 border border-slate-700/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-all"
            >
              <option value="Todos">Todos los músculos</option>
              <option
                v-for="m in muscles"
                :key="m"
                :value="m"
              >{{ m }}</option>
            </select>
            <button
              @click="openModal()"
              class="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-xl hover:from-indigo-500 hover:to-purple-500 transition-all shadow-lg shadow-indigo-500/25 flex items-center gap-2 font-medium"
            >
              <span>➕</span> Nuevo Ejercicio
            </button>
          </div>

          <!-- Exercise Cards Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            <div
              v-for="exercise in filteredExercises"
              :key="exercise.id"
              class="bg-slate-800/50 backdrop-blur-sm border border-slate-700/30 rounded-2xl overflow-hidden hover:border-indigo-500/50 transition-all duration-300 group"
            >
              <div class="p-6">
                <div class="flex items-start justify-between mb-4">
                  <div class="flex-1">
                    <h3 class="text-lg font-bold text-white group-hover:text-indigo-400 transition-colors">{{
                      exercise.name }}</h3>
                    <div class="flex flex-wrap gap-2 mt-2">
                      <span
                        class="inline-flex items-center gap-1 bg-indigo-500/20 text-indigo-300 text-xs px-2 py-1 rounded-full"
                      >
                        💪 {{ exercise.muscle }}
                      </span>
                      <span :class="[
                        'text-xs px-2 py-1 rounded-full',
                        exercise.difficulty === 'Principiante' ? 'bg-green-500/20 text-green-300' :
                          exercise.difficulty === 'Intermedio' ? 'bg-yellow-500/20 text-yellow-300' :
                            'bg-red-500/20 text-red-300'
                      ]">
                        {{ exercise.difficulty }}
                      </span>
                    </div>
                  </div>
                </div>

                <p class="text-slate-400 text-sm mb-4 line-clamp-2">{{ exercise.description || 'Sin descripción' }}</p>

                <div
                  v-if="exercise.equipment"
                  class="flex items-center gap-2 text-slate-500 text-sm mb-4"
                >
                  <span>🎯</span>
                  <span>{{ exercise.equipment }}</span>
                </div>

                <div class="flex gap-2 pt-4 border-t border-slate-700/50">
                  <button
                    @click="openModal(exercise)"
                    class="flex-1 bg-slate-700/50 text-slate-300 px-4 py-2 rounded-xl hover:bg-indigo-600/50 hover:text-white transition-all flex items-center justify-center gap-2"
                  >
                    ✏️ Editar
                  </button>
                  <button
                    @click="confirmDelete(exercise)"
                    class="bg-slate-700/50 text-slate-300 px-4 py-2 rounded-xl hover:bg-red-600/50 hover:text-white transition-all"
                  >
                    🗑️
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Empty State -->
          <div
            v-if="filteredExercises.length === 0"
            class="text-center py-16"
          >
            <div class="text-6xl mb-4">🏋️</div>
            <h3 class="text-xl font-bold text-white mb-2">No hay ejercicios</h3>
            <p class="text-slate-400 mb-6">Comienza agregando tu primer ejercicio al catálogo</p>
            <button
              @click="openModal()"
              class="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-xl hover:from-indigo-500 hover:to-purple-500 transition-all"
            >
              ➕ Crear Ejercicio
            </button>
          </div>
        </div>

        <!-- Routines View -->
        <div v-if="currentView === 'routines'">
          <!-- Action Bar -->
          <div class="flex justify-end mb-6">
            <button
              @click="openRoutineModal()"
              class="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-3 rounded-xl hover:from-purple-500 hover:to-indigo-500 transition-all shadow-lg shadow-purple-500/25 flex items-center gap-2 font-medium"
            >
              <span>➕</span> Nueva Rutina
            </button>
          </div>

          <!-- Routines List -->
          <div class="space-y-4">
            <div
              v-for="routine in routines"
              :key="routine.id"
              class="bg-slate-800/50 border border-slate-700/30 rounded-2xl p-6"
            >
              <div class="flex justify-between items-start">
                <div>
                  <h3 class="text-lg font-bold text-white">{{ routine.name }}</h3>
                  <p class="text-slate-400 text-sm">{{ routine.description || 'Sin descripción' }}</p>
                  <div class="flex flex-wrap gap-2 mt-2">
                    <span class="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full">{{ routine._count.exercises }} ejercicios</span>
                  </div>
                </div>
                <div class="flex gap-2">
                  <button
                    @click="openRoutineModal(routine)"
                    class="bg-slate-700/50 text-slate-300 px-4 py-2 rounded-xl hover:bg-indigo-600/50 hover:text-white transition-all"
                  >
                    ✏️
                  </button>
                  <button
                    @click="confirmDeleteRoutine(routine)"
                    class="bg-slate-700/50 text-slate-300 px-4 py-2 rounded-xl hover:bg-red-600/50 hover:text-white transition-all"
                  >
                    🗑️
                  </button>
                </div>
              </div>
            </div>
            <!-- Empty State for Routines -->
            <div
              v-if="routines.length === 0"
              class="text-center py-16"
            >
              <div class="text-6xl mb-4">📅</div>
              <h3 class="text-xl font-bold text-white mb-2">No hay rutinas</h3>
              <p class="text-slate-400 mb-6">Crea la primera rutina para empezar.</p>
              <button
                @click="openRoutineModal()"
                class="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-3 rounded-xl hover:from-purple-500 hover:to-indigo-500 transition-all"
              >
                ➕ Crear Rutina
              </button>
            </div>
          </div>
        </div>


        <!-- Stats View -->
        <div
          v-if="currentView === 'stats'"
          class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6"
        >
          <div class="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl p-6 text-white">
            <p class="text-indigo-200 text-sm mb-1">Total Ejercicios</p>
            <p class="text-4xl font-bold">{{ stats.totalExercises }}</p>
          </div>

          <div class="bg-slate-800/50 border border-slate-700/30 rounded-2xl p-6">
            <p class="text-slate-400 text-sm mb-1">Principiante</p>
            <p class="text-3xl font-bold text-green-400">{{ stats.byDifficulty?.['Principiante'] || 0 }}</p>
          </div>

          <div class="bg-slate-800/50 border border-slate-700/30 rounded-2xl p-6">
            <p class="text-slate-400 text-sm mb-1">Intermedio</p>
            <p class="text-3xl font-bold text-yellow-400">{{ stats.byDifficulty?.['Intermedio'] || 0 }}</p>
          </div>

          <div class="bg-slate-800/50 border border-slate-700/30 rounded-2xl p-6">
            <p class="text-slate-400 text-sm mb-1">Avanzado</p>
            <p class="text-3xl font-bold text-red-400">{{ stats.byDifficulty?.['Avanzado'] || 0 }}</p>
          </div>

          <!-- Muscle Distribution -->
          <div class="md:col-span-2 xl:col-span-4 bg-slate-800/50 border border-slate-700/30 rounded-2xl p-6">
            <h3 class="text-lg font-bold text-white mb-4">📊 Distribución por Músculo</h3>
            <div class="space-y-3">
              <div
                v-for="(count, muscle) in stats.byMuscle"
                :key="muscle"
                class="flex items-center gap-4"
              >
                <span class="w-24 text-slate-400 text-sm">{{ muscle }}</span>
                <div class="flex-1 bg-slate-700/50 rounded-full h-3 overflow-hidden">
                  <div
                    class="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-500"
                    :style="{ width: `${(count / stats.totalExercises) * 100}%` }"
                  ></div>
                </div>
                <span class="text-white font-medium w-8 text-right">{{ count }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

    <!-- Modal -->
    <Transition name="modal-fade">
      <div
        v-if="isModalOpen"
        class="fixed inset-0 bg-slate-900/95 flex items-center justify-center z-50 p-4"
        @click.self="isModalOpen = false"
      >
        <Transition name="modal-scale">
          <div
            class="bg-slate-800 border border-slate-700 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-auto shadow-2xl"
          >
            <div class="p-6 border-b border-slate-700 flex items-center justify-between bg-slate-800">
              <h2 class="text-xl font-bold text-white">
                {{ isEditing ? '✏️ Editar Ejercicio' : '➕ Nuevo Ejercicio' }}
              </h2>
              <button
                @click="isModalOpen = false"
                class="text-slate-400 hover:text-white transition-colors text-2xl w-10 h-10 rounded-full hover:bg-slate-700 flex items-center justify-center"
              >
                ✕
              </button>
            </div>

            <form
              @submit.prevent="saveExercise"
              class="p-6 space-y-4 bg-slate-800"
            >
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label class="block text-sm font-medium text-slate-300 mb-2">Nombre del Ejercicio *</label>
                  <input
                    v-model="form.name"
                    type="text"
                    required
                    placeholder="Ej: Press de Banca"
                    class="w-full bg-slate-700 border border-slate-600 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
                  />
                </div>

                <div>
                  <label class="block text-sm font-medium text-slate-300 mb-2">Músculo Principal *</label>
                  <select
                    v-model="form.muscle"
                    class="w-full bg-slate-700 border border-slate-600 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500"
                  >
                    <option
                      v-for="m in muscles"
                      :key="m"
                      :value="m"
                    >{{ m }}</option>
                  </select>
                </div>

                <!-- Difficulty Selector with Animation -->
                <div class="md:col-span-2">
                  <label class="block text-sm font-medium text-slate-300 mb-3">Dificultad</label>
                  <div class="difficulty-selector flex gap-3">
                    <button
                      v-for="diff in difficulties"
                      :key="diff.value"
                      type="button"
                      @click="form.difficulty = diff.value"
                      :class="[
                        'difficulty-btn flex-1 py-4 px-4 rounded-xl border-2 transition-all duration-300 relative overflow-hidden',
                        form.difficulty === diff.value
                          ? `${diff.activeClass} scale-105 shadow-lg`
                          : 'bg-slate-700 border-slate-600 hover:border-slate-500 text-slate-400'
                      ]"
                    >
                      <div class="relative z-10 flex flex-col items-center gap-2">
                        <span
                          class="text-2xl transition-transform duration-300"
                          :class="form.difficulty === diff.value ? 'scale-125' : ''"
                        >{{ diff.icon }}</span>
                        <span class="font-medium text-sm">{{ diff.label }}</span>
                      </div>
                      <div
                        v-if="form.difficulty === diff.value"
                        class="absolute inset-0 animate-pulse-soft"
                        :class="diff.bgPulse"
                      ></div>
                    </button>
                  </div>
                </div>

                <div class="md:col-span-2">
                  <label class="block text-sm font-medium text-slate-300 mb-2">Equipamiento</label>
                  <input
                    v-model="form.equipment"
                    type="text"
                    placeholder="Ej: Barra y mancuernas"
                    class="w-full bg-slate-700 border border-slate-600 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500"
                  />
                </div>
              </div>

              <div>
                <label class="block text-sm font-medium text-slate-300 mb-2">Descripción</label>
                <textarea
                  v-model="form.description"
                  rows="2"
                  placeholder="Describe el ejercicio..."
                  class="w-full bg-slate-700 border border-slate-600 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500 resize-none"
                ></textarea>
              </div>

              <div>
                <label class="block text-sm font-medium text-slate-300 mb-2">Instrucciones (una por línea)</label>
                <textarea
                  v-model="form.instructions"
                  rows="4"
                  placeholder="1. Primer paso&#10;2. Segundo paso..."
                  class="w-full bg-slate-700 border border-slate-600 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500 resize-none"
                ></textarea>
              </div>

              <div>
                <label class="block text-sm font-medium text-slate-300 mb-2">URL del Video</label>
                <input
                  v-model="form.video"
                  type="url"
                  placeholder="https://youtube.com/..."
                  class="w-full bg-slate-700 border border-slate-600 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div class="flex gap-3 pt-4">
                <button
                  type="button"
                  @click="isModalOpen = false"
                  class="flex-1 bg-slate-700 text-slate-300 px-6 py-3 rounded-xl hover:bg-slate-600 transition-all"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  :disabled="isSaving"
                  class="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-xl hover:from-indigo-500 hover:to-purple-500 transition-all disabled:opacity-50 font-medium"
                >
                  {{ isSaving ? 'Guardando...' : (isEditing ? 'Actualizar' : 'Guardar') }}
                </button>
              </div>
            </form>
          </div>
        </Transition>
      </div>
    </Transition>

    <!-- Routine Modal -->
    <Transition name="modal-fade">
      <div
        v-if="isRoutineModalOpen"
        class="fixed inset-0 bg-slate-900/95 flex items-center justify-center z-50 p-4"
        @click.self="isRoutineModalOpen = false"
      >
        <Transition name="modal-scale">
          <div
            class="bg-slate-800 border border-slate-700 rounded-2xl w-full max-w-lg max-h-[90vh] overflow-auto shadow-2xl"
          >
            <div class="p-6 border-b border-slate-700 flex items-center justify-between bg-slate-800">
              <h2 class="text-xl font-bold text-white">
                {{ isEditing ? '✏️ Editar Rutina' : '➕ Nueva Rutina' }}
              </h2>
              <button
                @click="isRoutineModalOpen = false"
                class="text-slate-400 hover:text-white transition-colors text-2xl w-10 h-10 rounded-full hover:bg-slate-700 flex items-center justify-center"
              >
                ✕
              </button>
            </div>

            <form
              @submit.prevent="saveRoutine"
              class="p-6 space-y-4"
            >
              <div>
                <label class="block text-sm font-medium text-slate-300 mb-2">Nombre de la Rutina *</label>
                <input
                  v-model="routineForm.name"
                  type="text"
                  required
                  placeholder="Ej: Día de Pecho y Tríceps"
                  class="w-full bg-slate-700 border border-slate-600 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label class="block text-sm font-medium text-slate-300 mb-2">Descripción</label>
                <textarea
                  v-model="routineForm.description"
                  rows="3"
                  placeholder="Describe el enfoque de la rutina..."
                  class="w-full bg-slate-700 border border-slate-600 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500 resize-none"
                ></textarea>
              </div>

              <div>
                <label class="block text-sm font-medium text-slate-300 mb-2">Ejercicios</label>
                <div class="max-h-60 overflow-y-auto bg-slate-700/50 rounded-xl p-4 space-y-3">
                  <div
                    v-for="exercise in exercises"
                    :key="exercise.id"
                    class="flex items-center"
                  >
                    <input
                      type="checkbox"
                      :id="`ex-${exercise.id}`"
                      :value="exercise.id"
                      v-model="routineForm.exercises"
                      class="h-4 w-4 rounded border-slate-500 bg-slate-600 text-indigo-600 focus:ring-indigo-500"
                    />
                    <label
                      :for="`ex-${exercise.id}`"
                      class="ml-3 text-sm text-slate-300"
                    >{{ exercise.name }}</label>
                  </div>
                </div>
              </div>

              <div class="flex gap-3 pt-4">
                <button
                  type="button"
                  @click="isRoutineModalOpen = false"
                  class="flex-1 bg-slate-700 text-slate-300 px-6 py-3 rounded-xl hover:bg-slate-600 transition-all"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  :disabled="isSaving"
                  class="flex-1 bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-3 rounded-xl hover:from-purple-500 hover:to-indigo-500 transition-all disabled:opacity-50 font-medium"
                >
                  {{ isSaving ? 'Guardando...' : (isEditing ? 'Actualizar' : 'Guardar') }}
                </button>
              </div>
            </form>
          </div>
        </Transition>
      </div>
    </Transition>

    <!-- Delete Routine Confirmation Modal -->
    <Transition name="modal-fade">
      <div
        v-if="isDeleteRoutineModalOpen"
        class="fixed inset-0 bg-slate-900/95 flex items-center justify-center z-50 p-4"
        @click.self="isDeleteRoutineModalOpen = false"
      >
        <Transition name="modal-scale">
          <div class="bg-slate-800 border border-slate-700 rounded-2xl w-full max-w-md shadow-2xl p-6">
            <div class="text-center mb-6">
              <div class="text-5xl mb-4">⚠️</div>
              <h3 class="text-xl font-bold text-white mb-2">¿Eliminar rutina?</h3>
              <p class="text-slate-400">Esta acción no se puede deshacer. La rutina "{{ routineToDelete?.name }}" será eliminada permanentemente.</p>
            </div>

            <div class="flex gap-3">
              <button
                @click="isDeleteRoutineModalOpen = false"
                class="flex-1 bg-slate-700 text-slate-300 px-6 py-3 rounded-xl hover:bg-slate-600 transition-all"
              >
                Cancelar
              </button>
              <button
                @click="deleteRoutine"
                class="flex-1 bg-red-600 text-white px-6 py-3 rounded-xl hover:bg-red-500 transition-all font-medium"
              >
                🗑️ Eliminar
              </button>
            </div>
          </div>
        </Transition>
      </div>
    </Transition>

    <!-- Toast -->
    <div
      v-if="toast.show"
      :class="[
        'fixed bottom-6 right-6 px-6 py-4 rounded-xl shadow-lg z-50 flex items-center gap-3 animate-slide-up',
        toast.type === 'success' ? 'bg-green-600' : 'bg-red-600'
      ]"
    >
      <span>{{ toast.type === 'success' ? '✅' : '❌' }}</span>
      <span class="text-white font-medium">{{ toast.message }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed, onMounted } from 'vue';
import { io } from 'socket.io-client';

const API_URL = 'http://localhost:3000/api';

interface Exercise {
  id: string;
  name: string;
  muscle: string;
  video: string;
  description: string;
  difficulty: 'Principiante' | 'Intermedio' | 'Avanzado';
  equipment: string;
  instructions: string[];
  createdAt: string;
}

interface Routine {
  id: string;
  name: string;
  description: string;
  exercises: RoutineExercise[];
  _count: {
    exercises: number;
  }
}

interface RoutineExercise {
  exerciseId: string;
  order: number;
}

interface Stats {
  totalExercises: number;
  byMuscle: { [key: string]: number };
  byDifficulty: { [key: string]: number };
}

// State
const currentView = ref<'exercises' | 'stats' | 'routines'>('exercises');
const exercises = ref<Exercise[]>([]);
const routines = ref<Routine[]>([]);
const stats = ref<Stats>({ totalExercises: 0, byMuscle: {}, byDifficulty: {} });
const searchText = ref('');
const filterMuscle = ref('Todos');
const isModalOpen = ref(false);
const isDeleteModalOpen = ref(false);
const isEditing = ref(false);
const isSaving = ref(false);
const currentExercise = ref<Exercise | null>(null);
const exerciseToDelete = ref<Exercise | null>(null);
const isRoutineModalOpen = ref(false);
const currentRoutine = ref<Routine | null>(null);
const routineToDelete = ref<Routine | null>(null);
const isDeleteRoutineModalOpen = ref(false);

const muscles = ['Pecho', 'Espalda', 'Piernas', 'Hombros', 'Bíceps', 'Tríceps', 'Abdomen'];

const difficulties = [
  {
    value: 'Principiante',
    label: 'Principiante',
    icon: '🌱',
    activeClass: 'bg-gradient-to-br from-green-500 to-emerald-600 border-green-400 text-white shadow-green-500/30',
    bgPulse: 'bg-green-400/20'
  },
  {
    value: 'Intermedio',
    label: 'Intermedio',
    icon: '💪',
    activeClass: 'bg-gradient-to-br from-yellow-500 to-orange-600 border-yellow-400 text-white shadow-yellow-500/30',
    bgPulse: 'bg-yellow-400/20'
  },
  {
    value: 'Avanzado',
    label: 'Avanzado',
    icon: '🔥',
    activeClass: 'bg-gradient-to-br from-red-500 to-rose-600 border-red-400 text-white shadow-red-500/30',
    bgPulse: 'bg-red-400/20'
  }
];

const form = reactive({
  name: '',
  muscle: 'Pecho',
  video: '',
  description: '',
  difficulty: 'Principiante',
  equipment: '',
  instructions: ''
});

const routineForm = reactive({
  name: '',
  description: '',
  userId: 'clrt1j8k5000008l34w0o2q66', // Hardcoded user ID for now
  exercises: [] as string[]
});

const toast = reactive({
  show: false,
  message: '',
  type: 'success' as 'success' | 'error'
});

// Computed
const filteredExercises = computed(() => {
  let result = exercises.value;

  if (filterMuscle.value !== 'Todos') {
    result = result.filter(ex => ex.muscle === filterMuscle.value);
  }

  if (searchText.value) {
    const search = searchText.value.toLowerCase();
    result = result.filter(ex =>
      ex.name.toLowerCase().includes(search) ||
      ex.description?.toLowerCase().includes(search)
    );
  }

  return result;
});

// Methods
const showToast = (message: string, type: 'success' | 'error' = 'success') => {
  toast.message = message;
  toast.type = type;
  toast.show = true;
  setTimeout(() => toast.show = false, 3000);
};

const loadExercises = async () => {
  try {
    const response = await fetch(`${API_URL}/exercises`);
    const data = await response.json();
    // Ensure instructions are always an array
    exercises.value = data.map((ex: Exercise) => ({
      ...ex,
      instructions: Array.isArray(ex.instructions) ? ex.instructions : [],
    }));
  } catch (error) {
    console.error('Error loading exercises:', error);
    showToast('Error al cargar ejercicios', 'error');
  }
};

const loadRoutines = async () => {
  try {
    // Hardcoded user ID for now
    const response = await fetch(`${API_URL}/routines?userId=a7246c3e-eef1-421d-ab6c-e5f286b816c5`);
    routines.value = await response.json();
  } catch (error) {
    console.error('Error loading routines:', error);
    showToast('Error al cargar rutinas', 'error');
  }
};

const loadStats = async () => {
  try {
    const response = await fetch(`${API_URL}/exercises/stats`);
    stats.value = await response.json();
  } catch (error) {
    console.error('Error loading stats:', error);
  }
};

const openModal = (exercise?: Exercise) => {
  if (exercise) {
    isEditing.value = true;
    currentExercise.value = exercise;
    form.name = exercise.name;
    form.muscle = exercise.muscle;
    form.video = exercise.video || '';
    form.description = exercise.description || '';
    form.difficulty = exercise.difficulty;
    form.equipment = exercise.equipment || '';
    form.instructions = exercise.instructions?.join('\n') || '';
  } else {
    isEditing.value = false;
    currentExercise.value = null;
    form.name = '';
    form.muscle = 'Pecho';
    form.video = '';
    form.description = '';
    form.difficulty = 'Principiante';
    form.equipment = '';
    form.instructions = '';
  }
  isModalOpen.value = true;
};

const saveExercise = async () => {
  if (!form.name.trim()) {
    showToast('El nombre es requerido', 'error');
    return;
  }

  isSaving.value = true;

  try {
    const exerciseData = {
      name: form.name,
      muscle: form.muscle,
      video: form.video,
      description: form.description,
      difficulty: form.difficulty,
      equipment: form.equipment,
      instructions: form.instructions.split('\n').filter(i => i.trim())
    };

    if (isEditing.value && currentExercise.value) {
      const response = await fetch(`${API_URL}/exercises/${currentExercise.value.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(exerciseData)
      });

      if (!response.ok) throw new Error('Error updating');
      showToast('¡Ejercicio actualizado!');
    } else {
      const response = await fetch(`${API_URL}/exercises`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(exerciseData)
      });

      if (!response.ok) throw new Error('Error creating');
      showToast('¡Ejercicio creado!');
    }

    isModalOpen.value = false;
    loadExercises();
    loadStats();
  } catch (error) {
    console.error(error);
    showToast('Error al guardar', 'error');
  } finally {
    isSaving.value = false;
  }
};

const confirmDelete = (exercise: Exercise) => {
  exerciseToDelete.value = exercise;
  isDeleteModalOpen.value = true;
};

const deleteExercise = async () => {
  if (!exerciseToDelete.value) return;

  try {
    const response = await fetch(`${API_URL}/exercises/${exerciseToDelete.value.id}`, {
      method: 'DELETE'
    });

    if (!response.ok) throw new Error('Error deleting');

    showToast('Ejercicio eliminado');
    isDeleteModalOpen.value = false;
    loadExercises();
    loadStats();
  } catch (error) {
    console.error(error);
    showToast('Error al eliminar', 'error');
  }
};

const openRoutineModal = (routine?: Routine) => {
  if (routine) {
    isEditing.value = true;
    currentRoutine.value = routine;
    routineForm.name = routine.name;
    routineForm.description = routine.description;
    routineForm.exercises = routine.exercises.map(ex => ex.exerciseId);
  } else {
    isEditing.value = false;
    currentRoutine.value = null;
    routineForm.name = '';
    routineForm.description = '';
    routineForm.exercises = [];
  }
  isRoutineModalOpen.value = true;
};

const saveRoutine = async () => {
  if (!routineForm.name.trim()) {
    showToast('El nombre es requerido', 'error');
    return;
  }

  isSaving.value = true;

  try {
    const routineData = {
      name: routineForm.name,
      description: routineForm.description,
      userId: routineForm.userId
    };

    let savedRoutine;

    if (isEditing.value && currentRoutine.value) {
      const response = await fetch(`${API_URL}/routines/${currentRoutine.value.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(routineData)
      });
      if (!response.ok) throw new Error('Error updating');
      savedRoutine = await response.json();
      showToast('¡Rutina actualizada!');
    } else {
      const response = await fetch(`${API_URL}/routines`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(routineData)
      });
      if (!response.ok) throw new Error('Error creating');
      savedRoutine = await response.json();
      showToast('¡Rutina creada!');
    }

    //
    // Lógica para actualizar ejercicios en la rutina
    const routineId = savedRoutine.id;
    const existingExercises = currentRoutine.value?.exercises.map(ex => ex.exerciseId) || [];
    const exercisesToAdd = routineForm.exercises.filter(exId => !existingExercises.includes(exId));
    const exercisesToRemove = existingExercises.filter(exId => !routineForm.exercises.includes(exId));

    for (const exerciseId of exercisesToAdd) {
      await fetch(`${API_URL}/routines/${routineId}/exercises`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ exerciseId, order: 0 }) // `order` is not handled yet
      });
    }

    for (const exerciseId of exercisesToRemove) {
      await fetch(`${API_URL}/routines/${routineId}/exercises/${exerciseId}`, {
        method: 'DELETE'
      });
    }

    isRoutineModalOpen.value = false;
    loadRoutines();
  } catch (error) {
    console.error(error);
    showToast('Error al guardar la rutina', 'error');
  } finally {
    isSaving.value = false;
  }
};

const confirmDeleteRoutine = (routine: Routine) => {
  routineToDelete.value = routine;
  isDeleteRoutineModalOpen.value = true;
};

const deleteRoutine = async () => {
  if (!routineToDelete.value) return;

  try {
    const response = await fetch(`${API_URL}/routines/${routineToDelete.value.id}`, {
      method: 'DELETE'
    });

    if (!response.ok) throw new Error('Error deleting');

    showToast('Rutina eliminada');
    isDeleteRoutineModalOpen.value = false;
    loadRoutines();
  } catch (error) {
    console.error(error);
    showToast('Error al eliminar la rutina', 'error');
  }
};

// Socket connection for real-time updates
let socket: any = null;

onMounted(() => {
  loadExercises();
  loadStats();
  loadRoutines();

  socket = io(API_URL);
  socket.on('exercises-updated', () => {
    console.log('🔔 Datos actualizados');
    loadExercises();
    loadStats();
  });
  socket.on('routines-updated', () => {
    console.log('🔔 Rutinas actualizadas');
    loadRoutines();
  });
});
</script>

<style>
@import url('https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css');

/* Modal animations */
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-scale-enter-active {
  transition: all 0.3s ease-out;
}

.modal-scale-leave-active {
  transition: all 0.2s ease-in;
}

.modal-scale-enter-from {
  transform: scale(0.9) translateY(20px);
  opacity: 0;
}

.modal-scale-leave-to {
  transform: scale(0.95);
  opacity: 0;
}

/* Difficulty button animations */
.difficulty-btn {
  transform-origin: center;
}

.difficulty-btn:active {
  transform: scale(0.98);
}

@keyframes pulse-soft {

  0%,
  100% {
    opacity: 0;
  }

  50% {
    opacity: 1;
  }
}

.animate-pulse-soft {
  animation: pulse-soft 2s ease-in-out infinite;
}

@keyframes slide-up {
  from {
    transform: translateY(20px);
    opacity: 0;
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.animate-slide-up {
  animation: slide-up 0.3s ease-out;
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: rgba(30, 41, 59, 0.5);
}

::-webkit-scrollbar-thumb {
  background: rgba(99, 102, 241, 0.5);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(99, 102, 241, 0.7);
}
</style>