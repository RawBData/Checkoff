class Api::TasksController < ApplicationController

    def create
        @task = Task.new(task_params)
        @task.author_id = current_user.id
        if @task.save
          # render json: @task
          render json: @task, include: :tags
        else
          render json: @task.errors.full_messages, status: 422
        end
    end
      
    def edit
        @task = current_user.tasks.find(params[:id])
        render :edit
    end

    def update

        @task = current_user.tasks.find(params[:id])

        #updating notes array with new note
        
        newParams = task_params

        if @task
          addNote = newParams["newNote"]
          newNotesArray = @task.notes.push(addNote)
          newParams["notes"] = newNotesArray
          newParams.delete(:newNote)
        end

        p newParams

        if @task && @task.update(newParams)
          # render json: @task
          render json: @task, include: :tags
        elsif !@task
          render json: ['Could not locate task'], status: 400
        else
          render json: @task.errors.full_messages, status: 401
        end


    end
      
    def show
        @task = Task.find(params[:id])
        render json: @task
    end
      
    def index
        @tasks = current_user.tasks
        
        render json: @tasks, include: :tags

    end
      
    def destroy
        @task = current_user.tasks.find(params[:id])
        if @task
          @task.destroy
          # render json: @task
          render json: @task, include: :tags
        else
          render ['Could not find task']
        end
    end
      
    private
      
      def selected_task
        task.find(params[:id])
      end
      
      def task_params
        params.require(:task).permit(:title, :newNote, :complete, :notes, :start_date, :due_date, :priority, :list_id, :estimate, :parent_id,  tag_names: [])
      end

end

# add_column :table_name, :column_name, :string, array: true, default: []
