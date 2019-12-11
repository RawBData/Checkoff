class Api::ListsController < ApplicationController


    def create
        @list = List.new(list_params)
        @list.author_id = current_user.id
        if @list.save
            # render json: @list
            render json: @list
        else
            render json: @list.errors.full_messages, status: 422
        end
    end
        
    def edit
        @list = current_user.lists.find(params[:id])
        render :edit
    end

    def update

        @list = current_user.lists.find(params[:id])

        #updating notes array with new note

        if @list && @list.update(params)
            # render json: @list
            render json: @list
        elsif !@list
            render json: ['Could not locate list'], status: 400
        else
            render json: @list.errors.full_messages, status: 401
        end


    end
        
    def show
        @list = List.find(params[:id])
        render json: @list
    end
        
    def index
        @lists = current_user.lists
        
        render json: @lists

    end
        
    def destroy
        @list = current_user.lists.find(params[:id])
        if @list
            @list.destroy
            # render json: @list
            render json: @list
        else
            render ['Could not find list']
        end
    end
        
    private
        
        def selected_list
        list.find(params[:id])
        end
        
        def list_params
        params.require(:list).permit(:name)
        end
    
 end
    
    # add_column :table_name, :column_name, :string, array: true, default: []

