# class EventIndexSerializer < ActiveModel::Serializer
#   attributes :id, :title, :description, :location, :start_time, :end_time, :user_event, :user_can_modify, :time

#   def user_event
#     current_user&.user_events&.find_by(event_id: object.id)
#   end

#   def user_can_modify
#     current_user.admin? || current_user == object.user
#   end

#   def time
#     "From #{object.start_time.strftime('%A, %m/%d/%y at %I:%m %p')} to #{object.end_time.strftime('%A, %m/%d/%y at %I:%m %p')}"
#   end
# end
