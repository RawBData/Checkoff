class Api::TasksController < ApplicationController

    def create
        @task = Task.new(task_params)
        @task.author_id = current_user.id
        if @task.save
          render json: @task
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

        p task_params
        if @task && @task.update(task_params)
          render json: @task
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
        render json: @tasks
    end
      
    def destroy
        @task = current_user.tasks.find(params[:id])
        if @task
          @task.destroy
          render json: @task
        else
          render ['Could not find task']
        end
    end
      
    private
      
      def selected_task
        task.find(params[:id])
      end
      
      def task_params
        params.require(:task).permit(:title, :notes, :start_date, :due_date, :priority, :estimate, :parent_id)
      end

end
